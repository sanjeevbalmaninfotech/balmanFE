// proxy.ts
import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function proxy(request: NextRequest) {
    const url = request.nextUrl.clone()
    const { pathname } = url

    // Read domain from environment variable
    const siteDomain = process.env.NEXT_PUBLIC_BALMAN_SITE_DOMAIN || 'balmaninfotech.net'

    // Get the forwarded host from Azure (this is the public domain) domain
    const forwardedHost = request.headers.get('x-forwarded-host')
    const protocol = request.headers.get('x-forwarded-proto') || 'https'

    // 1. Remove trailing slashes (except root)
    if (pathname !== '/' && pathname.endsWith('/')) {
        url.pathname = pathname.slice(0, -1)
        return NextResponse.redirect(url, 308)
    }

    // 2. Redirect www to non-www using forwarded host
    if (forwardedHost === `www.${siteDomain}`) {
        // Construct new URL without port
        const newUrl = `${protocol}://${siteDomain}${pathname}${url.search}`
        return NextResponse.redirect(newUrl, 308)
    }

    return NextResponse.next()
}

// Match all paths except static files
export const config = {
    matcher: [
        '/((?!api|_next/static|_next/image|favicon.ico).*)',
    ],
}

export default function OrangeBlurEffect() {
    return (
        <>
            {/* Top-Right Orange Blur Background */}
            <div
                className="pointer-events-none absolute -top-20 -right-20 w-72 h-72 lg:w-96 lg:h-96 hidden xl:block"
                style={{
                    background: '#FF5900',
                    filter: 'blur(80px)',
                    opacity: 0.65,
                    zIndex: 0
                }}
            />
        </>
    );
}
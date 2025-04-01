export function Wrapper({children}) {
    return (
        <div className="max-w-[1200px] mx-auto w-full px-6 py-3 md:px-8">
            {children}
        </div>
    );
}
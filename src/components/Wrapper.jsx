export function Wrapper({children}) {
    return (
        <div className="max-w-[1200px] mx-auto w-full px-6 md:px-8">
            {children}
        </div>
    );
}
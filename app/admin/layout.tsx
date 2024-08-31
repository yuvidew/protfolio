export default function AdminLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <div className="mt-[5rem]">
            {children}
        </div>
    )
}
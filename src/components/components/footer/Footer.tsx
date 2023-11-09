const Footer = () => {
    return (
        <section className="border-t ">
            <div className="max-w-7xl mx-auto flex items-center justify-between py-10">
                <div className="text-[] text-">© {new Date().getFullYear()} LATC. All rights reserved</div>
                <div className="text-[] text-">
                    <div className="flex items-center justify-between gap-6">
                        <img src="/fbfoot.svg" alt="" />
                        <img src="/twfoot.svg" alt="" />
                        <img src="/igfoot.svg" alt="" />
                        <img src="/ghfoot.svg" alt="" />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Footer

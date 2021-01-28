const Footer = () => {
    let date = new Date();
    date = date.getFullYear();
    return (
        <div>
            This is the Footer component.
            Copyright {date}.
        </div>
    )
};

export default Footer;
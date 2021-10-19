const Footer = (props) => {
    return(
      <div>
        <h4>Copyright {props.nama}</h4>
        <p>@ {props.tahun}</p>
      </div>
    )
}

export default Footer;
import './footer.css'

export default function Footer() {
  return (
    <>
      <section className="footer">
        <div className="part1 section">
            <h4>ABOUT</h4>

            <ul>
                <li><a href="">Contact Us</a></li>
                <li><a href="">About Us</a></li>
                <li><a href="">Careers</a></li>
                <li><a href="">Flipkart Stories</a></li>
                <li><a href="">Press</a></li>
                <li><a href="">Flipkart Wholesale</a></li>
                <li><a href="">Corporate Information</a></li>
            </ul>
        </div>

        <div className="part2 section">
            <h4>HELP</h4>

            <ul>
                <li><a href="">Payments</a></li>
                <li><a href="">Shipping</a></li>
                <li><a href="">Cancellation & Returns</a></li>
                <li><a href="">FAQ</a></li>
                <li><a href="">Report Infringement</a></li>
            </ul>
        </div>

        <div className="part3 section">
            <h4>CONSUMER POLICY</h4>

            <ul>
                <li><a href="">Return Policy</a></li>
                <li><a href="">Terms of Use</a></li>
                <li><a href="">Security</a></li>
                <li><a href="">Privacy</a></li>
                <li><a href="">Sitemap</a></li>
                <li><a href="">Grievance Redrassal</a></li>
                <li><a href="">EPR Compliance</a></li>
            </ul>
        </div>

        <div className="part4 section">
            <h4>SOCIAL</h4>

            <ul>
                <li><a href="">Facebook</a></li>
                <li><a href="">Twitter</a></li>
                <li><a href="">YouTube</a></li>
            </ul>
        </div>

         <hr></hr> 
         
          <div className="part5 section">
            <h4>Mail Us:</h4>

            <address>
                Flipkart Internet Private Limited,<br />
                Buildings Alyssa, Begonia &<br />
                Clove Embassy Tech Village,<br />
                Outer Ring Road, Devarabeesanahalli Village,<br />
                Bengaluru, 560103,<br />
                Karnataka, India<br />
            </address>
          </div>
        
          <div className="part6 section">
            <h4>Registered Office Address:</h4>

            <address>
              Flipkart Internet Private Limited,<br/>
                Buildings Alyssa, Begonia &<br />
                Clove Embassy Tech Village,<br />
                Outer Ring Road, Devarabeesanahalli Village,<br/>
                Bengaluru, 560103,<br />
                Karnataka, India<br />
                CIN : U51109KA2012PTC066107<br />
                Telephone: <a href="#">044-45614700</a><br />
            </address>
          </div>

      </section>
    </>
  )
}

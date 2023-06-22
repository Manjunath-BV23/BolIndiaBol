import React from 'react';
import { MDBFooter, MDBContainer, MDBRow, MDBCol, MDBIcon } from 'mdb-react-ui-kit';
import logo from "../Images/logo.jpeg";
import { Link } from 'react-router-dom';

export default function WhiteFooter() {
  return (
    <MDBFooter bgColor='light' className='text-center text-lg-start text-muted'>
      <section className='d-flex justify-content-center justify-content-lg-between p-4 border-bottom'>
        <div className='me-5 d-none d-lg-block'>
          <span>Get connected with us on social networks:</span>
        </div>

        <div>
          <a href='' className='me-4 text-reset'>
            <MDBIcon color='secondary' fab icon='facebook-f' />
          </a>
          <a href='' className='me-4 text-reset'>
            <MDBIcon color='secondary' fab icon='twitter' />
          </a>
          <a href='' className='me-4 text-reset'>
            <MDBIcon color='secondary' fab icon='google' />
          </a>
          <a href='' className='me-4 text-reset'>
            <MDBIcon color='secondary' fab icon='instagram' />

          </a>
          <a href='' className='me-4 text-reset'>
            <MDBIcon color='secondary' fab icon='linkedin' />
          </a>
          <a href='' className='me-4 text-reset'>
            <MDBIcon color='secondary' fab icon='github' />
          </a>
        </div>
      </section>

      <section className=''>
        <MDBContainer className='text-center text-md-start mt-5'>
          <MDBRow className='mt-3'>
            <MDBCol md='3' lg='4' xl='3' className='mx-auto mb-4'>
            <img src={logo} alt="Activ Realty" width={"80%"}/>
            <br /><br />
              <p style={{textAlign: "justify"}}>
              Bol India Bol focuses solely on stories related to the planet, people, and politics. It covers topics such as the environment, social issues, human rights, international relations, and government policies.
              </p>
            </MDBCol>

            <MDBCol md='2' lg='2' xl='2' className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Useful links</h6>
              <p>
                <a href='/' className='text-reset'>
                  Home
                </a>
              </p>
              <p>
                <a href='/planet' className='text-reset'>
                  Planet
                </a>
              </p>
              <p>
                <a href='/people' className='text-reset'>
                  People
                </a>
              </p>
              <p>
                <a href='/politics' className='text-reset'>
                  Politics
                </a>
              </p>
            </MDBCol>

            <MDBCol md='3' lg='2' xl='2' className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Privacy</h6>
              <p>
                <Link to={"/privacy-policy"} className='text-reset'>
                Privacy policy
                </Link>
              </p>
              <p>
              <Link to={"/disclaimer"} className='text-reset'>
                Disclaimer
                </Link>
              </p>
              
            </MDBCol>

            <MDBCol md='4' lg='3' xl='3' className='mx-auto mb-md-0 mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Contact</h6>
              <p>
                <MDBIcon color='secondary' icon='home' className='me-2' />
                Bangalore, India
              </p>
              <p>
                <MDBIcon color='secondary' icon='envelope' className='me-3' />
                mailus@bolindiabol.live
              </p>
              <p>
                <MDBIcon color='secondary' icon='phone' className='me-3' /> +91 9606 021 325
              </p>
              <p>
                {/* <MDBIcon color='secondary' icon='print' className='me-3' /> + 01 234 567 89 */}
              </p>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </section>

      <div className='text-center p-4' style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}>
        © 2023 Copyright: 
        <a className='text-reset fw-bold' style={{paddingLeft: "10px"}} href='https://bolindiabol.live/'>
          bolindiabol.live
        </a>
      </div>
    </MDBFooter>
  );
}
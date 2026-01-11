import Link from 'next/link'
export default function Footer({lk}){
    return(
        <>
<footer className="text-center text-lg-start bg-body-tertiary text-muted">
  <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
    <div className="me-5 d-none d-lg-block">
      <span>Get connected with us on social networks:</span>
    </div>
    <div>
      <Link href="#" className="me-4 text-reset">
        <i className="fab fa-facebook-f"></i>
      </Link>
      <Link href="#" className="me-4 text-reset">
        <i className="fab fa-twitter"></i>
      </Link>
      <Link href="#" className="me-4 text-reset">
        <i className="fab fa-google"></i>
      </Link>
      <Link href="#" className="me-4 text-reset">
        <i className="fab fa-instagram"></i>
      </Link>
      <Link href="#" className="me-4 text-reset">
        <i className="fab fa-linkedin"></i>
      </Link>
      <Link href="#" className="me-4 text-reset">
        <i className="fab fa-github"></i>
      </Link>
    </div>
  </section>

  <section className="">
    <div className="container text-center text-md-start mt-5">
      <div className="row mt-3">
        <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
          <h6 className="text-uppercase fw-bold mb-4">
            <i className="fas fa-gem me-3"></i>Some Links
          </h6>
          <p className="text-reset"><Link href='/node.js'>node.js</Link></p>
<p className="text-reset"><Link href='/express' prefetch={false}>express</Link></p>
<p className="text-reset"><Link href='/npm' prefetch={false}>npm</Link></p>
<p className="text-reset"><Link href='/javascript' prefetch={false}>javascript</Link></p>
<p className="text-reset"><Link href='/mongodb' prefetch={false}>mongodb</Link></p>
<p className="text-reset"><Link href='/reactjs' prefetch={false}>reactjs</Link></p>
<p className="text-reset"><Link href='/angular' prefetch={false}>angular</Link></p>
<p className="text-reset"><Link href='/typescript' prefetch={false}>typescript</Link></p>
<p className="text-reset"><Link href='/socket.io' prefetch={false}>socket.io</Link></p>
<p className="text-reset"><Link href='/webpack' prefetch={false}>webpack</Link></p>
<p className="text-reset"><Link href='/graphql' prefetch={false}>graphql</Link></p>
<p className="text-reset"><Link href='/docker' prefetch={false}>docker</Link></p>
<p className="text-reset"><Link href='/kubernetes' prefetch={false}>kubernetes</Link></p>
<p className="text-reset"><Link href='/jest' prefetch={false}>jest</Link></p>
<p className="text-reset"><Link href='/mocha' prefetch={false}>mocha</Link></p>
<p className="text-reset"><Link href='/chai' prefetch={false}>chai</Link></p>
<p className="text-reset"><Link href='/sequelize.js' prefetch={false}>sequelize.js</Link></p>
<p className="text-reset"><Link href='/loopback' prefetch={false}>loopback</Link></p>
<p className="text-reset"><Link href='/koa' prefetch={false}>koa</Link></p>
<p className="text-reset"><Link href='/node-modules' prefetch={false}>node-modules</Link></p>
<p className="text-reset"><Link href='/node-postgres' prefetch={false}>node-postgres</Link></p>
<p className="text-reset"><Link href='/node-fetch' prefetch={false}>node-fetch</Link></p>
<p className="text-reset"><Link href='/node-inspector' prefetch={false}>node-inspector</Link></p>
<p className="text-reset"><Link href='/node-cron' prefetch={false}>node-cron</Link></p>
<p className="text-reset"><Link href='/pdf' prefetch={false}>pdf</Link></p>
<p className="text-reset"><Link href='/pdf-generation' prefetch={false}>pdf-generation</Link></p>
<p className="text-reset"><Link href='/pdf-reader' prefetch={false}>pdf-reader</Link></p>
<p className="text-reset"><Link href='/pdf.js' prefetch={false}>pdf.js</Link></p>
<p className="text-reset"><Link href='/pdfbox' prefetch={false}>pdfbox</Link></p>
<p className="text-reset"><Link href='/pdfkit' prefetch={false}>pdfkit</Link></p>
<p className="text-reset"><Link href='/pdfsharp' prefetch={false}>pdfsharp</Link></p>
<p className="text-reset"><Link href='/pdf-generation' prefetch={false}>pdf-generation</Link></p>
<p className="text-reset"><Link href='/itext' prefetch={false}> itext</Link></p>
<p className="text-reset"><Link href='/pdf-parser' prefetch={false}>pdf-parser</Link></p>
<p className="text-reset"><Link href='/pdf-generation' prefetch={false}>pdf-generation</Link></p>
<p className="text-reset"><Link href='/pdfbox' prefetch={false}>pdfbox</Link></p>
<p className="text-reset"><Link href='/pdfkit' prefetch={false}>pdfkit</Link></p>
<p className="text-reset"><Link href='/pdfsharp' prefetch={false}>pdfsharp</Link></p>
<p className="text-reset"><Link href='/pdf-generation' prefetch={false}>pdf-generation</Link></p>
<p className="text-reset"><Link href='/pdf-rendering' prefetch={false}>pdf-rendering</Link></p>
<p className="text-reset"><Link href='/pdf-generation' prefetch={false}>pdf-generation</Link></p>
<p className="text-reset"><Link href='/pdfbox' prefetch={false}>pdfbox</Link></p>
<p className="text-reset"><Link href='/pdfkit' prefetch={false}>pdfkit</Link></p>
<p className="text-reset"><Link href='/pdfsharp' prefetch={false}>pdfsharp</Link></p>
<p className="text-reset"><Link href='/pdf-generation' prefetch={false}>pdf-generation</Link></p>
<p className="text-reset"><Link href='/pdf-rendering' prefetch={false}>pdf-rendering</Link></p>
<p className="text-reset"><Link href='/pdf-generation' prefetch={false}>pdf-generation</Link></p>
<p className="text-reset"><Link href='/pdfbox' prefetch={false}>pdfbox</Link></p>
<p className="text-reset"><Link href='/pdfkit' prefetch={false}>pdfkit</Link></p>
<p className="text-reset"><Link href='/pdfsharp' prefetch={false}>pdfsharp</Link></p>
<p className="text-reset"><Link href='/pdf-generation' prefetch={false}>pdf-generation</Link></p>

        </div>
        <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
          <h6 className="text-uppercase fw-bold mb-4">
            PYTHON Links
          </h6>
          <p className="text-reset"><Link href='/python' prefetch={false}>python</Link></p>
<p className="text-reset"><Link href='/python-3.x'prefetch={false}>python-3.x</Link></p>
<p className="text-reset"><Link href='/django'prefetch={false}>django</Link></p>
<p className="text-reset"><Link href='/flask'prefetch={false}>flask</Link></p>
<p className="text-reset"><Link href='/numpy'prefetch={false}>numpy</Link></p>
<p className="text-reset"><Link href='/pandas'prefetch={false}>pandas</Link></p>
<p className="text-reset"><Link href='/matplotlib'prefetch={false}>matplotlib</Link></p>
<p className="text-reset"><Link href='/tensorflow'prefetch={false}>tensorflow</Link></p>
<p className="text-reset"><Link href='/keras'prefetch={false}>keras</Link></p>
<p className="text-reset"><Link href='/scipy'prefetch={false}>scipy</Link></p>
<p className="text-reset"><Link href='/selenium'prefetch={false}>selenium</Link></p>
<p className="text-reset"><Link href='/beautifulsoup'prefetch={false}>beautifulsoup</Link></p>
<p className="text-reset"><Link href='/flask-sqlalchemy'prefetch={false}>flask-sqlalchemy</Link></p>
<p className="text-reset"><Link href='/django-rest-framework'prefetch={false}>django-rest-framework</Link></p>
<p className="text-reset"><Link href='/python-requests'prefetch={false}>python-requests</Link></p>
<p className="text-reset"><Link href='/pytorch'prefetch={false}>pytorch</Link></p>
<p className="text-reset"><Link href='/django-models'prefetch={false}>django-models</Link></p>
<p className="text-reset"><Link href='/python-import'prefetch={false}>python-import</Link></p>
<p className="text-reset"><Link href='/python-asyncio'prefetch={false}>python-asyncio</Link></p>
<p className="text-reset"><Link href='/python-decorators'prefetch={false}>python-decorators</Link></p>
<p className="text-reset"><Link href='/python-generators'prefetch={false}>python-generators</Link></p>
<p className="text-reset"><Link href='/python-requests'prefetch={false}>python-requests</Link></p>
<p className="text-reset"><Link href='/python-multithreading'prefetch={false}>python-multithreading</Link></p>
<p className="text-reset"><Link href='/python-logging'prefetch={false}>python-logging</Link></p>

        </div>
        <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
          <h6 className="text-uppercase fw-bold mb-4">
            Useful links
          </h6>
<p className="text-reset"><Link href='/google-analytics'prefetch={false}>google-analytics</Link></p>
<p className="text-reset"><Link href='/google-cloud-platform'prefetch={false}>google-cloud-platform</Link></p>
<p className="text-reset"><Link href='/google-apps-script'prefetch={false}>google-apps-script</Link></p>
<p className="text-reset"><Link href='/google-drive-api'prefetch={false}>google-drive-api</Link></p>
<p className="text-reset"><Link href='/google-chrome-extension'prefetch={false}>google-chrome-extension</Link></p>
<p className="text-reset"><Link href='/android'prefetch={false}>android</Link></p>
<p className="text-reset"><Link href='/firebase'prefetch={false}>firebase</Link></p>
<p className="text-reset"><Link href='/google-cloud-firestore'prefetch={false}>google-cloud-firestore</Link></p>
<p className="text-reset"><Link href='/google-cloud-functions'prefetch={false}>google-cloud-functions</Link></p>
<p className="text-reset"><Link href='/google-cloud-storage'prefetch={false}>google-cloud-storage</Link></p>
<p className="text-reset"><Link href='/google-bigquery'prefetch={false}>google-bigquery</Link></p>
<p className="text-reset"><Link href='/google-sheets'prefetch={false}>google-sheets</Link></p>
<p className="text-reset"><Link href='/google-calendar-api'prefetch={false}>google-calendar-api</Link></p>
<p className="text-reset"><Link href='/google-visualization'prefetch={false}>google-visualization</Link></p>
<p className="text-reset"><Link href='/google-oauth'prefetch={false}>google-oauth</Link></p>
<p className="text-reset"><Link href='/google-plus'prefetch={false}>google-plus</Link></p>
<p className="text-reset"><Link href='/google-search'prefetch={false}>google-search</Link></p>
<p className="text-reset"><Link href='/google-tag-manager'prefetch={false}>google-tag-manager</Link></p>
<p className="text-reset"><Link href='/google-app-engine'prefetch={false}>google-app-engine</Link></p>
<p className="text-reset"><Link href='/google-apps-script'prefetch={false}>google-apps-script</Link></p>
<p className="text-reset"><Link href='/google-apps-script-web-app'prefetch={false}>google-apps-script-web-app</Link></p>
<p className="text-reset"><Link href='/google-sheets'prefetch={false}>google-sheets</Link></p>
<p className="text-reset"><Link href='/google-docs'prefetch={false}>google-docs</Link></p>
<p className="text-reset"><Link href='/google-drive-api'prefetch={false}>google-drive-api</Link></p>
<p className="text-reset"><Link href='/google-calendar-api'prefetch={false}>google-calendar-api</Link></p>
<p className="text-reset"><Link href='/google-apps-script-gmail'prefetch={false}>google-apps-script-gmail</Link></p>
<p className="text-reset"><Link href='/google-form'prefetch={false}>google-form</Link></p>
<p className="text-reset"><Link href='/google-app-maker'prefetch={false}>google-app-maker</Link></p>



        </div>
        <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
          <h6 className="text-uppercase fw-bold mb-4">More Links</h6>
          <p className="text-reset"><Link href='/ios'prefetch={false}>ios</Link></p>
<p className="text-reset"><Link href='/swift'prefetch={false}>swift</Link></p>
<p className="text-reset"><Link href='/objective-c'prefetch={false}>objective-c</Link></p>
<p className="text-reset"><Link href='/xcode'prefetch={false}>xcode</Link></p>
<p className="text-reset"><Link href='/iphone'prefetch={false}>iphone</Link></p>
<p className="text-reset"><Link href='/ios-app-extension'prefetch={false}>ios-app-extension</Link></p>
<p className="text-reset"><Link href='/ios-simulator'prefetch={false}>ios-simulator</Link></p>
<p className="text-reset"><Link href='/core-data'prefetch={false}>core-data</Link></p>
<p className="text-reset"><Link href='/cocoa-touch'prefetch={false}>cocoa-touch</Link></p>
<p className="text-reset"><Link href='/uikit'prefetch={false}>uikit</Link></p>
<p className="text-reset"><Link href='/cocoa'prefetch={false}>cocoa</Link></p>
<p className="text-reset"><Link href='/ios5'prefetch={false}>ios5</Link></p>
<p className="text-reset"><Link href='/ios6'prefetch={false}>ios6</Link></p>
<p className="text-reset"><Link href='/ios7'prefetch={false}>ios7</Link></p>
<p className="text-reset"><Link href='/docker'prefetch={false}>docker</Link></p>
<p className="text-reset"><Link href='/docker-compose'prefetch={false}>docker-compose</Link></p>
<p className="text-reset"><Link href='/dockerfile'prefetch={false}>dockerfile</Link></p>
<p className="text-reset"><Link href='/docker-swarm'prefetch={false}>docker-swarm</Link></p>
<p className="text-reset"><Link href='/docker-machine'prefetch={false}>docker-machine</Link></p>
<p className="text-reset"><Link href='/docker-for-windows'prefetch={false}>docker-for-windows</Link></p>
<p className="text-reset"><Link href='/docker-for-mac'prefetch={false}>docker-for-mac</Link></p>
<p className="text-reset"><Link href='/dockerhub'prefetch={false}>dockerhub</Link></p>
<p className="text-reset"><Link href='/docker-registry'prefetch={false}>docker-registry</Link></p>
<p className="text-reset"><Link href='/docker-api'prefetch={false}>docker-api</Link></p>
<p className="text-reset"><Link href='/docker-networking'prefetch={false}>docker-networking</Link></p>
<p className="text-reset"><Link href='/docker-volume'prefetch={false}>docker-volume</Link></p>
<p className="text-reset"><Link href='/docker-compose'prefetch={false}>docker-compose</Link></p>
<p className="text-reset"><Link href='/docker-stack'prefetch={false}>docker-stack</Link></p>
<p className="text-reset"><Link href='/docker-machine'prefetch={false}>docker-machine</Link></p>
<p className="text-reset"><Link href='/docker-desktop'prefetch={false}>docker-desktop</Link></p>
<p className="text-reset"><Link href='/docker-swarm'prefetch={false}>docker-swarm</Link></p>
<p className="text-reset"><Link href='/docker-cloud'prefetch={false}>docker-cloud</Link></p>
<p className="text-reset"><Link href='/docker-image'prefetch={false}>docker-image</Link></p>
<p className="text-reset"><Link href='/docker-exec'prefetch={false}>docker-exec</Link></p>
<p className="text-reset"><Link href='/docker-build'prefetch={false}>docker-build</Link></p>
<p className="text-reset"><Link href='/docker-machine'prefetch={false}>docker-machine</Link></p>
<p className="text-reset"><Link href='/docker-container'prefetch={false}>docker-container</Link></p>
<p className="text-reset"><Link href='/docker-compose'prefetch={false}>docker-compose</Link></p>
<p className="text-reset"><Link href='/docker-network'prefetch={false}>docker-network</Link></p>
<p className="text-reset"><Link href='/docker-swarm'prefetch={false}>docker-swarm</Link></p>
<p className="text-reset"><Link href='/docker-compose-file'prefetch={false}>docker-compose-file</Link></p>
<p className="text-reset"><Link href='/docker-windows'prefetch={false}>docker-windows</Link></p>

<p className="text-reset"><Link href='/ios-appstore'prefetch={false}>ios-appstore</Link></p>
<p className="text-reset"><Link href='/ios-ui-automation'prefetch={false}>ios-ui-automation</Link></p>

        </div>
      </div>
    </div>
  </section>
  <div className="text-center p-4" style={{backgroundColor: 'rgba(0, 0, 0, 0.05)'}}>
    {new Date().toLocaleString()}<br/>
    {lk?<Link href="https://youtube.com/codewithsundeep" target="_blank" prefetch={false}>Project Created By : Codewithsundeep</Link>:''}<br/>
    Content Source : <Link href="https://stackoverflow.com/" target="_blank" prefetch={false}>Stackoverflow</Link>
  </div>
</footer>
        </>
    )
}
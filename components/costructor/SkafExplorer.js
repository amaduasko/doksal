import "./SkafExplorer.css"

const SkafExplorer = ({ facadeColor, profileColor, img }) => {
  console.log({facadeColor,profileColor})
  return (
    <div className="skafexplorer">
      <div className="skafexplorer__inner">
        <div className="skafexplorer__image" style={{backgroundImage: `url(${img});`, backgroundSize: "contain"}}></div>

        <div className="cover-template">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            id="svg8"
            version="1.1"
            viewBox="0 0 512 512"
            height="512"
            width="512">

            <defs>
                <clipPath id="ldsp">
                  <path
                      d="m 367.38493,18.441369 -252.07351,10.238439 5.71212,441.099192 2.80301,-0.32296 64.22893,4.74319 175.78384,13.39036 0.61058,1.06793 2.59084,-0.22867 28.04197,-27.28286 0.32296,-427.939863 z m -3.05054,3.118916 0.24752,452.099095 -241.00288,-17.95912 1.54177,-2.31502 2.41639,-1.14101 -5.11333,-413.219898 h -4.74084 l -0.0259,-8.324183 z" />
                </clipPath>
                <clipPath id="profil">
                  <path
                      d="m 364.33439,21.560285 -246.6773,9.139864 0.026,8.324183 4.68663,-0.148519 5.16754,413.368417 -2.41639,1.14101 -1.54177,2.31502 241.02175,17.42633 C 363.76506,329.42027 364.39374,176.2297 364.31552,29.448339 h -0.0165 z m -4.68899,8.578789 0.0495,140.695436 -117.96484,0.37247 L 240.9969,34.172684 Z M 236.88315,35.240613 237.61161,171.22113 128.0912,171.56532 126.639,38.739079 Z M 359.69726,175.9997 359.74676,314.83981 242.47738,310.6176 241.756,176.02798 Z m -122.05972,0.0282 0.72138,134.44346 -108.79431,-3.91804 -1.42626,-130.49943 z m -108.03049,134.39866 108.77545,4.45796 0.70487,131.47541 -108.08235,-8.04364 z m 112.89393,4.62769 117.24815,4.8045 0.0472,135.48781 -116.59042,-8.68015 z" />
                </clipPath>
                <clipPath id="steklo">
                  <path
                      d="m 359.6454,30.139074 -118.64849,4.03361 0.73317,137.034296 117.96483,-0.37247 z m -122.76225,5.101539 -110.24415,3.498466 1.4522,132.826241 109.52041,-0.34419 z m 122.81411,140.759087 -117.94124,0.0282 0.72137,134.58962 117.26939,4.22221 z m -122.05972,0.0282 -109.49919,0.0259 1.42626,130.49943 108.79431,3.91809 z m -108.03049,134.39866 1.39797,127.88973 108.08235,8.04364 -0.70487,-131.47541 z m 112.89393,4.62769 0.70487,131.61216 116.59043,8.68015 -0.0472,-135.48781 z" />
                </clipPath>
            </defs>
          </svg>

          {/* <svg width="0" height="0" viewBox="0 0 1 1" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
            <defs>
              <clipPath id="ldsp">
                <path d="m 203.81116,25.738954 -131.133709,25.75205 0.089,190.944926 131.120669,27.04616 26.29913,-14.6745 V 39.742374 Z m -1.01525,1.64956 -0.12579,232.149376 -128.221479,-24.25083 4.1856,-0.80816 0.15487,-177.706946 -5.28095,-1.03839 0.0297,-3.23384 z" />
              </clipPath>

              <clipPath id="steklo">
                <path d="m 144.27966,44.690143 47.17849,-9.068684 0.89887,220.558891 -47.75218,-9.101 z" />
              </clipPath>

              <clipPath id="profil">
                <path d="M 201.56055 27.837891 L 73.09375 52.476562 L 73.013672 55.376953 L 191.76758 33.123047 L 192.35742 256.17969 L 194.82812 256.79883 L 194.7168 32.570312 L 201.48242 31.302734 L 201.56055 27.837891 z M 144.7168 42.25 L 142.24609 42.699219 L 141.9082 246.76758 L 78.634766 234.47852 C 78.634766 234.47852 76.571877 234.72013 75.335938 234.88867 C 75.335937 234.88867 200.92691 259.24219 201.5625 259.24219 C 202.19809 259.24219 202.03906 258.44727 202.03906 258.44727 L 143.73633 247.12305 L 144.7168 42.25 z M 78.634766 234.47852 L 79.529297 234.375 L 79.568359 56.369141 L 78.833984 56.091797 C 78.833984 56.191107 78.634766 234.47852 78.634766 234.47852 z M 118.875 46.96875 L 116.17773 47.869141 L 115.95312 240.90039 L 118.65039 241.34961 L 118.875 46.96875 z " />
              </clipPath>
            </defs>            
          </svg> */}

          {/* <div className="zone zone_facade"></div>
          <div className="zone zone_bg"></div>
          <div className="zone zone_steklo"></div>
          <div className="zone zone_profil"></div> */}
        </div>


        <style jsx>{`
          .skafexplorer {
            width: 100%;
            display: flex;
            justify-content: center;
            align-items: center;
          }
          .skafexplorer__inner {
            width: 100%;
            min-height: 512px;
            overflow: hidden;
            position: relative;
          }
          svg {
            width: 100%;
          }
          .skafexplorer__image {
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            z-index: 0;
            background-position: center;
            background-size: 100%;
            //background: url(${img});
          }
          .cover-template {
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            margin: auto;
          }
          .zone {
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            margin: auto;
            z-index: 0;
          }
          .zone_facade {
            clip-path: url(#ldsp);
            background: url(/static/img/constructor/${facadeColor}.png);
            background-size: 40%;
            opacity: .8;
          }
          .zone_profil {
            clip-path: url(#profil);
            background: url(/static/img/${profileColor}.png);
            opacity: .8;
            //transform: rotateX(45deg);
          }
          .zone_bg {
            clip-path: url(#steklo);
            background: url(/static/products/bg.jpg);
          }
          .zone_steklo {
            clip-path: url(#steklo);
            //background: #90d9ff;
            background: rgba(0,0,0,.9);
            opacity: .8;
          }
        `}</style>
      </div>
    </div>  
  )
}

export default SkafExplorer

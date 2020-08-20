import React, { forwardRef } from "react";
import PropTypes from "prop-types";

const Gears = forwardRef(
  ({ color = "currentColor", size = 32, strokeWidth = 4, ...rest }, ref) => {
    return (
      <svg
        ref={ref}
        className="yaicons"
        width={size}
        height={size}
        viewBox="0 0 96 96"
        fill="none"
        stroke={color}
        strokeWidth={strokeWidth}
        overflow="visible"
        {...rest}
      >
        <g
          strokeLinecap="round"
          strokeLinejoin="round"
          transform="translate(1.5 7.5)"
        >
          <path d="M26.6392405,18.2278481 C28.1433618,18.2278481 29.5596642,18.3490331 30.9680023,18.5819858 L32.0178377,26.2183639 C33.1770306,26.5578622 34.2938818,26.9929968 35.3515274,27.531888 L35.8011301,27.7692175 L41.8734368,23.0801706 C44.266279,24.7805645 46.3627132,26.8708327 48.0701054,29.2583413 L43.4269832,35.3802539 C43.9992298,36.4219352 44.4731665,37.5248617 44.8446636,38.6734722 L44.9975928,39.1684854 L52.6002715,40.1447289 C52.8423311,41.579381 52.9683544,43.0534543 52.9683544,44.556962 C52.9683544,46.0328599 52.8469171,47.4803946 52.6134893,48.8901192 L45.0074709,49.9355582 C44.6674114,51.1022254 44.2280817,52.2269977 43.685572,53.2912147 L43.4467393,53.7435459 L48.1160319,59.7911583 C46.415638,62.1840006 44.3253698,64.2804348 41.9378612,65.987827 L35.8406423,61.3644602 C34.7910183,61.9415604 33.6798978,62.4146266 32.5218926,62.7867156 L32.0227767,62.940009 L31.0514737,70.517993 C29.6168216,70.7600526 28.1427482,70.8860759 26.6392405,70.8860759 C25.1627291,70.8860759 23.7146044,70.7645376 22.3043252,70.5309197 L21.2606433,62.944948 C20.0896546,62.6023436 18.9632933,62.1573079 17.8963555,61.610148 L17.4427778,61.3693993 L11.4059278,66.0343813 C9.01360156,64.3345019 6.91752612,62.2449287 5.21026701,59.8582273 L9.83667839,53.7583629 C9.26251349,52.7103131 8.793075,51.5997513 8.4233641,50.4436479 L8.27100777,49.9454363 L0.678357696,48.9700734 C0.436201317,47.5351446 0.310126582,46.0607765 0.310126582,44.556962 C0.310126582,43.0829048 0.431261189,41.6371401 0.664118876,40.2290794 L8.28088582,39.1833025 C8.62277698,38.0196401 9.06004985,36.8976697 9.60261442,35.8363002 L9.84161742,35.3851929 L5.16119347,29.3245328 C6.86097694,26.9321337 8.95046558,24.8359739 11.3370938,23.1286191 L17.4625339,27.7741566 C18.5027845,27.2047459 19.6048823,26.7383093 20.7516631,26.3701454 L21.2458263,26.2183639 L22.225251,18.5962274 C23.6604564,18.3539743 25.1351193,18.2278481 26.6392405,18.2278481 Z" />
          <path d="M36.5,45 C36.5,50.5199964 32.0200012,55 26.5,55 C20.9799988,55 16.5,50.5199964 16.5,45 C16.5,39.4799988 20.9799988,35 26.5,35 C32.0200013,35 36.5,39.4799988 36.5,45 Z" />
          <path
            d="M69.090859,4.61052224 C70.1432024,4.61052224 71.1341246,4.69586826 72.1194933,4.85922239 L72.8552795,10.2065457 C73.6663542,10.4444636 74.4478208,10.7493408 75.1878823,11.1268606 L75.5024821,11.2931188 L79.7501254,8.01076995 C81.4245385,9.20182127 82.891638,10.6658208 84.0865979,12.337889 L80.8391093,16.623799 C81.2396504,17.3533013 81.5714203,18.1256724 81.831527,18.930015 L81.9386053,19.276659 L87.2579072,19.9615182 C87.4275021,20.9661313 87.5161724,21.9983286 87.5161724,23.0511153 C87.5161724,24.0845691 87.4316992,25.098142 87.26862,26.0852208 L81.9473201,26.8159843 C81.7095964,27.6328514 81.4024121,28.4203663 81.0230289,29.1654618 L80.8560078,29.4821533 L84.123845,33.7175969 C82.9345822,35.3928289 81.4724981,36.8604447 79.8023876,38.0555955 L75.5357546,34.8171985 C74.8014923,35.2211199 74.0241872,35.5521844 73.2140627,35.8125347 L72.8648869,35.9197902 L72.186594,41.2258862 C71.1828945,41.395141 70.1515948,41.4828867 69.0996807,41.4828867 C68.0666542,41.4828867 67.0534678,41.3972927 66.0667409,41.2334723 L65.3352684,35.9214456 C64.5159404,35.6813509 63.7278184,35.3695391 62.9812544,34.9862279 L62.6638729,34.8175747 L58.4410325,38.0830788 C56.7669805,36.8923878 55.3001322,35.428875 54.1052655,33.7573721 L57.3410662,29.4868979 C56.9391819,28.7529359 56.6105579,27.9752193 56.3516997,27.1656302 L56.2450216,26.8167467 L50.9327363,26.1325058 C50.7630736,25.1276989 50.6743672,24.0952952 50.6743672,23.0422936 C50.6743672,22.0101288 50.7586292,20.9977951 50.9213099,20.0118814 L56.2501298,19.2808831 C56.4891355,18.4661203 56.7948812,17.680567 57.1743033,16.9374654 L57.3414438,16.6216309 L54.0658165,12.3770492 C55.2546523,10.7021274 56.716191,9.23470368 58.3856856,8.03957888 L62.6720669,11.293505 C63.3997725,10.8949663 64.1707661,10.5685426 64.9730382,10.3109389 L65.3187491,10.2047411 L66.0027169,4.86773002 C67.0068035,4.69833987 68.0385155,4.61052224 69.090859,4.61052224 Z"
            transform="rotate(15 69.095 23.047)"
          />
          <path
            d="M75.7472624,23.0482989 C75.7481415,26.7232405 72.7687632,29.7050938 69.0968643,29.7042148 C65.424962,29.7033353 62.4441566,26.7200549 62.4432772,23.0451133 C62.4423982,19.3701654 65.4217764,16.3883152 69.0936786,16.3891942 C72.7655777,16.3900737 75.746383,19.373351 75.7472624,23.0482989 Z"
            transform="rotate(15 69.095 23.047)"
          />
          <path d="M74.701974,49.4101118 C75.5072575,49.8750433 76.2280653,50.3777104 76.9100612,50.9377544 L75.1116882,55.350672 C75.627362,55.8907471 76.0908049,56.4689363 76.4904784,57.0843747 L76.6578292,57.350412 L81.3582547,56.7169441 C82.1137464,58.3669506 82.5900339,60.1340689 82.7661559,61.9400707 L78.3879887,63.7824427 C78.3723724,64.5170284 78.2851913,65.2540158 78.1290445,65.9837971 L78.0579096,66.2960914 L81.8265061,69.1687851 C81.5126437,70.0116992 81.124472,70.8398516 80.659731,71.6448082 C80.2035243,72.4349829 79.6910692,73.1724355 79.1303433,73.8550282 L74.7350476,72.0636822 C74.1923629,72.583185 73.6094803,73.0495731 72.9900747,73.4516472 L72.7223897,73.6199944 L73.3529134,78.3011023 C71.7029102,79.0565955 69.9357954,79.5328839 68.1297973,79.7090063 L66.294543,75.34904 C65.5542062,75.3335671 64.8131024,75.243387 64.0781097,75.0846528 L63.7635071,75.0124446 L60.9010974,78.7693546 C60.0581849,78.4554916 59.2300343,78.067319 58.4250793,77.6025771 C57.6345777,77.1461799 56.8968419,76.6334873 56.2140124,76.072487 L58.000099,71.6884584 C57.4790701,71.1430743 57.0135961,70.5566445 56.6115035,69.9339069 L56.4430815,69.6648103 L51.7690775,70.296354 C51.0137031,68.6467825 50.5373929,66.8801472 50.3610926,65.0746187 L54.7234979,63.2388856 C54.7400557,62.5002974 54.8320051,61.7606125 54.9914243,61.0273717 L55.0638546,60.7135422 L51.300355,57.8444198 C51.6142511,57.0013276 52.0024865,56.1730016 52.4673223,55.3678807 C52.92296,54.5786915 53.434706,53.8420929 53.9946123,53.1602148 L58.395767,54.9547023 C58.9385036,54.4373744 59.5194189,53.9718507 60.1379737,53.571318 L60.4053715,53.4036787 L59.7729215,48.7121446 C61.4224608,47.9566999 63.1890735,47.4803174 64.9945887,47.303943 L66.838099,51.6845024 C67.5710407,51.7011948 68.3052646,51.7921354 69.0330346,51.9495015 L69.3445183,52.0209882 L72.2249239,48.2429501 C73.0681924,48.5568805 73.8966905,48.9451802 74.701974,49.4101118 Z" />
          <path
            d="M72.6395736,63.5089944 C72.6409638,66.8629145 69.9200682,69.5838135 66.5661452,69.582424 C63.2122193,69.5810334 60.4890662,66.8578779 60.4876749,63.5039578 C60.4862847,60.1500319 63.2071803,57.4291357 66.5611063,57.4305252 C69.9150293,57.4319159 72.6381823,60.1550684 72.6395736,63.5089944 Z"
            transform="rotate(30 66.564 63.506)"
          />
        </g>
      </svg>
    );
  }
);

Gears.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  strokeWidth: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
};

Gears.displayName = "Gears";

export default Gears;
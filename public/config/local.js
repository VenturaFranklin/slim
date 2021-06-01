window.config = {
  path: "/",
  /** This is an array, but we'll only use the first entry for now */
  servers: [
    {
      id: "J4Care",
      url: "https://test.j4care.com:8443/dcm4chee-arc/aets/DCM4CHEE/rs",
      write: false
    },
    {
      id: "Google Cloud",
      url: "https://idc-external-006.uc.r.appspot.com",
      write: false
    },
    {
      id: "Neagen",
      url: "https://cloud.neagen.com/ilp",
      write: false,
      qidoPathPrefix: "qrs",
      wadoPathPrefix: "wrs",
      stowPathPrefix: "stowrs"
    }
  ],
  annotations: [
    {
      finding: {
        value: '108369006',
        schemeDesignator: 'SCT',
        meaning: 'Tumor'
      },
      style: {
        stroke: {
          color: [251, 134, 4, 1],
          width: 2
        },
        fill: {
          color: [255, 255, 255, 0.2]
        }
      }
    },
    {
      finding: {
        value: '85756007',
        schemeDesignator: 'SCT',
        meaning: 'Tissue'
      },
      style: {
        stroke: {
          color: [51, 204, 51, 1],
          width: 2
        },
        fill: {
          color: [255, 255, 255, 0.2]
        }
      }
    }
  ]
};

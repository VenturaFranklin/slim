# SliM: Slide microscopy image display and annotation system for thin clients

A lightweight server-less single-page application for interactive visualization of digital slide microscopy (SM) images and associated image annotations in standard DICOM format.
The application leverages the [dicom-microscopy-viewer](https://github.com/MGHComputationalPathology/dicom-microscopy-viewer) library.
It can simply be placed in front of a [DICOMweb](https://www.dicomstandard.org/dicomweb/) compatible Image Management System (IMS), Picture Archiving and Communication (PACS) or Vendor Neutral Archive (VNA).

## Images

The app will search the IMS for studies containing SM images and visualize image instances of the DICOM VL Whole Slide Microscopy Image SOP Storage Class.

## Annotations

The app allows users to create graphical image region of interest (ROI) annotations and store them as DICOM Comprehensive 3D SR documents using SR template [TID 1500 "Measurement Report"](http://dicom.nema.org/medical/dicom/current/output/chtml/part16/chapter_A.html#sect_TID_1500).
ROIs are stored as 3D spatial coordinates (SCOORD3D) according to SR template [TID 1410 "Planar ROI Measurements and Qualitative Evaluations"](http://dicom.nema.org/medical/dicom/current/output/chtml/part16/chapter_A.html#sect_TID_1410) together with any measurements or qualitative evaluations derived thereof.
Specifically, [Image Region](http://dicom.nema.org/medical/dicom/current/output/chtml/part16/chapter_A.html#para_b68aa0a9-d0b1-475c-9630-fbbd48dc581d) is used to store the vector graphic data and [Finding](http://dicom.nema.org/medical/dicom/current/output/chtml/part16/chapter_A.html#para_c4ac1cac-ee86-4a86-865a-8137ebe1bd95) is used to describe what has been annotated using a standard medical terminology such as SNOMED CT.

The app will also search the IMS for existing SR documents and visualize any ROI annotations contained in DICOM Comprehensive 3D SR documents (image region, finding, and any measurement or qualitative evaluation stored according to TID 1410).

## Implementation

The app is implemented in [TypeScript](https://www.typescriptlang.org/) using the [React](https://reactjs.org/) framework.

## Autentication and authorization

Users can authenticate and authorize the application to access data via [OpenID Connect (OIDC)](https://openid.net/connect/) based on the [OAuth 2.0](https://oauth.net/2/) protocol.
The application is considered as a public client, which can obtain an [authorization code](https://oauth.net/2/grant-types/authorization-code/) using [Proof Key for Code Exchange (PKCE)](https://oauth.net/2/pkce/) extension.

## Usage

### Docker

    $ docker-compose up

Serves the app via an NGINX web server at [http://localhost:8008](http://localhost:8008).
The app will try to access the DICOMweb service at the `/dicomweb` path.
You can simply add a `/dicomweb` location to `etc/nginx/conf.d/local.conf`:

```nginx
server {

    ...

    location /dicomweb/ {
        proxy_pass http://localhost:8080/dcm4chee-arc/aets/DCM4CHEE/rs;
    }

}
```

### Development

    $ yarn start

Serves the app via a development server at [http://localhost:3000](http://localhost:3000).

The URL of the DICOMweb service can be configured via the `REACT_APP_DICOMWEB_URL` environment variable, which can be specified in the `.env` file in the project directory.

## Testing

    $ yarn test

Launches the test runner in the interactive watch mode.
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.
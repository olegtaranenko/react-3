import React, {Component} from 'react';
import * as Yup           from 'yup';
import {withRouter}       from 'react-router-dom';
import InputMask          from 'react-input-mask';

import {ErrorMessage, Field, Form, Formik} from 'formik';
// import {parsePhoneNumberFromString}        from 'libphonenumber-js';
import WithShopService                     from "../with-shop-service";

// import detectBrowserLanguage from 'detect-browser-language';


class ContactForm extends Component {

  render() {

    const yupContactSchema = Yup.object().shape({
      name:    Yup.string()
               .min(2, 'Too Short!')
               .max(50, 'Too Long!')
               .required('Required'),
/*
      phone:   Yup.string()
               .min(7)
               .test('phone', 'Phone number is not valid', function (value) {
                 // noinspection EqualityComparisonWithCoercionJS
                 if (!value && value != 0) {
                   return true;
                 }

                 let ret = false;
                 try {
                   detectedNumber = parsePhoneNumberFromString(value);
                   return !!detectedNumber.number
                 } catch (e) {
                   // do nothing
                 }

                 return ret;
               }),
*/
      email:   Yup.string()
               .email('Invalid email')
               .min(5, 'Too Short!')
               .required('Required'),
      message: Yup.string()
               .min(10, 'Too Short!')
               .required('Required')
    });

    // const numberToShow = detectedNumber ? detectedNumber.formatInternational() : null;
    const {ShopService} = this.props;

    const MyFormik = withRouter(({history}) => (
      <Formik
        initialValues={{
          name:    '',
          email:   '',
          phone:   '',
          message: ''
        }}
        validationSchema={yupContactSchema}
        onSubmit={(values, {setSubmitting}) => {
          setTimeout(() => {
            const {phone} = values;
            if (phone.indexOf('_') >= 0) {
              values.phone = '';
            }
            ShopService.saveMessage(values);
            setSubmitting(false);
            history.push('/thanks');
          }, 1000);
        }}
      >
        {({isSubmitting}) => {
          let loaderClassName = "contact-form__spinner";
          if (isSubmitting) {
            loaderClassName += ' active'
          }
          return <Form className="contact-form">
            <ContactField
              type="name"
              name="name"
              label="Name"
              placeholder="Enter your Name"
            />
            <ContactField
              type="email"
              name="email"
              label="Email"
              placeholder="Enter your E-Mail"
            />
            <ContactField
              type="phone"
              name="phone"
              label="Phone"
              placeholder="Enter phone number"
              required={false}
              as={InputMask}
              mask="+7(999) 999-9999"
              // value={numberToShow}
            />

            <ContactField
              as="textarea"
              name="message"
              label="Your message"
              placeholder="Tell us..."
              labelAlign="up"
              theme="message"
            />
            <button className="contact-btn contact-form__submit" type="submit" disabled={isSubmitting}>
              Send us
            </button>
            <div className={loaderClassName}>
              <img src="../img/Eclipse-1s-64px.svg" alt="spinner"/>
            </div>
          </Form>
        }}
      </Formik>
    ));

    return (
      <section className="contact">
        <div className="container">
          <div className="row justify-content-center">
            <div className="contact-body">
              <div className="title">Tell us about your tastes</div>
              <img className="beanslogo contact-logo" src="/logo/Beans_logo_dark.svg" alt="Beans logo"/>
              <MyFormik/>
            </div>
          </div>
        </div>
      </section>
    )
  }
}

const ContactField = ({
    name,
    label,
    type = 'text',
    placeholder,
    required = true,
    labelAlign = 'left',
    as,
    theme,
    value,
    mask
  } = {}
) => {
  const requiredCt = required ? <span className="contact-field__required-asterisk">*</span> : null;
  let labelAlignClass = "contact-field";
  if (labelAlign !== 'left') {
    labelAlignClass += ` contact-field__${labelAlign}`
  }
  if (theme) {
    labelAlignClass += ` contact-field__${theme}`
  }
  let errorClassName = `contact-field__error contact-field__error-${name}`;
  if (mask) {
    placeholder = mask.replace(/9/g, '_' );
  }
  const attribs = {name};
  const optional = {as, value, mask, placeholder, type};
  for (let key in optional) {
    const val = optional[key];
    if (val || val === 0 || val === false) {
      attribs[key] = val;
    }
  }

  return (
    <div className={labelAlignClass}>
      <div className="contact-field__required">
        <label className="contact-field__label" htmlFor={name}>{label}
        </label>
        {requiredCt}
      </div>
      <Field
        {...attribs}
      />
      <ErrorMessage name={name} component="span" className={errorClassName}/>
    </div>
  )
};

export default WithShopService()(ContactForm);


/*
    const browserLanguage = detectBrowserLanguage();
    // const preferredCountries = [];
    const usedCountries = {};

    if (browserLanguage) {
      const splitter = browserLanguage.match(/([a-z]{2})?_?([A-Z]{2})/);
      const country = splitter[2];
      if (country) {
        preferredCountries.push(country);
        usedCountries[country] = true;
      }
    }


    ['RU', 'DE', 'US', 'UK', 'UA', 'BY', 'KZ', 'LT'].forEach(country => {
      if (!usedCountries[country]) {
        preferredCountries.push(country)
      }
    });
*/
// console.log(preferredCountries);

// import {PhoneNumberUtil, PhoneNumberFormat as PNF}                   from 'google-libphonenumber'
/*
     preferredCountries.some(country => {
       try {
         const number = pnu.parseAndKeepRawInput(value, country);
         // console.log(pnu.format(number, PNF.INTERNATIONAL));
         const isPossible = pnu.isPossibleNumber(number);
         let countryCode;
         if (isPossible) {
           countryCode = number.getCountryCode();
         }
         let isValid = pnu.isValidNumberForRegion(number, country);

         if (!isValid && countryCode) {
           isValid = pnu.isValidNumber(number);
         }
         if (isValid) {
           detectedNumber = number;
           ret = isValid
         }
         return ret;
       } catch (e) {
         // do nothing
         console.log(`${value} is not a phone number`);
       }
       return ret;
     });
*/

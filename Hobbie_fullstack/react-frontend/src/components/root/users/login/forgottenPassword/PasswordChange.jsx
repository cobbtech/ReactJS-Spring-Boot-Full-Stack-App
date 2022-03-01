

import React from 'react'
import Footer from '../../../fragments/footer/Footer'
import Background from '../../../fragments/background/Background'
import { useState } from 'react'
import styles from '../../../../../css/Forms.module.css'
import UserEmailDataService from '../../../../../api/users/UserEmailDataService'




const PasswordChange = () => {


    const [email, setEmail] = useState('');
    const [sent, setSent] = useState(false);
    const [found, setFound] = useState(true);
    const [errors, setErrors] = useState({});


    const validate = () => {
        const errors = {};

        if (
            !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(email)
        ) {
            errors.email = 'Invalid email address';
        }

        return errors;
    }

    const sentClicked = async event => {
        event.preventDefault();
        let errors = validate(email)
        setErrors(errors);
        console.log(errors);

        if (Object.keys(errors).length === 0) {
            const res = await UserEmailDataService(email);
            console.log(res.status);

            if (res.status === 200) {
                setSent(true);
                setFound(true);
            }
            else {
                setFound(false);
            }
        }

    }



    return (
        <main>
            <form className={styles.form_style}>
        
                    {!found && <div className={styles.midErrors} >User with this email doesn't exist</div>}

                    {!sent &&
                        <div className={styles.password_change_div}>
                            <div className={styles.form_field}>
                                <section className={styles.name_section}>
                                    <input type="text"  id="email" name="email" onChange={e => setEmail(e.target.value)} required />
                                    <label htmlFor="email"
                                        name="email"
                                        type="email"
                                        className={styles.label_name}>
                                        {Object.keys(errors).length === 0 && <span className={styles.content_name}>Your email:</span>}
                                        {errors.email && <small className={styles.errors}>{errors.email}</small>}
                                    </label>
                                </section>
                            </div>
                            <button className={styles.button} onClick={sentClicked}>Submit</button>
                        </div>}
                        {sent &&
                        <div>
                            <div className={styles.form_field}>
                                <section className={styles.name_section}>
                                    <span className={styles.content_name}>Thank you, please check your email.</span>
                                </section>
                            </div>
                        </div>}
 
            </form>
          
            <Footer />
            <Background />
        </main>
    )
}


export default PasswordChange
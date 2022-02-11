import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import MuiDialogContent from '@material-ui/core/DialogContent';
import MuiDialogActions from '@material-ui/core/DialogActions';
import IconButton from '@material-ui/core/IconButton';
import { GrFormClose } from "react-icons/gr";
import Typography from '@material-ui/core/Typography';
import Slide from '@material-ui/core/Slide';

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide in={true} direction="down" ref={ref} {...props} />;
});

const styles = (theme) => ({
    root: {
        margin: 0,
        padding: theme.spacing(2),
    },
    closeButton: {
        position: 'absolute',
        right: theme.spacing(1),
        top: theme.spacing(1),
        color: theme.palette.grey[500],
    },

});

const DialogTitle = withStyles(styles)((props) => {
    const { children, classes, onClose, ...other } = props;
    return (
        <MuiDialogTitle disableTypography className={classes.root} {...other}>
            <Typography variant="h6">{children}</Typography>
            {onClose ? (
                <IconButton aria-label="close" className={classes.closeButton} onClick={onClose}>
                    <GrFormClose />
                </IconButton>
            ) : null}
        </MuiDialogTitle>
    );
});

const DialogContent = withStyles((theme) => ({
    root: {
        padding: theme.spacing(2),
        overflowY: 'scroll',
        maxHeight: '70vh',
        '& p': {
            padding: '10px 0px',
        },
        '& ol': {
            padding: '5px 20px',
            '& li': {
                padding: '10px 0px'
            }
        },
        mainHeading: {
            backgroundColor: 'green'
        }
    },
}))(MuiDialogContent);

const DialogActions = withStyles((theme) => ({
    root: {
        margin: 0,
        padding: theme.spacing(1),
    },
}))(MuiDialogActions);


function TermsAndConditionModal({ open, close }) {

    return (
        <div>
            <Dialog
                onClose={close}
                open={open}
                fullWidth={true}
                maxWidth={'xs'}
                TransitionComponent={Transition}
                keepMounted
            >
                <DialogTitle style={{ fontSize: '35px' }} onClose={close}>
                    Terms & Conditions
                </DialogTitle>

                <DialogContent dividers >
                    <p>
                        <strong><u>TERMS AND CONDITIONS FOR USING NBP
                            MPAYMENT &amp; EPAYMENT PM RELIEF FUND (&ldquo;PMRF&rdquo;)
                            FOR COVID-19</u></strong>
                    </p>
                    <p>These Terms and Conditions are applicable for the
                        Services (as defined below) and are applicable to all the
                        Devices (defined below) through which the Services may be
                        accessed.</p>
                    <ol>
                        <li><strong>DEFINITIONS</strong></li>
                    </ol>
                    <p>In these Terms and Conditions, the terms mentioned
                        herein below shall have the following meanings:</p>
                    <p>
                        <strong>Bank/NBP:</strong>&nbsp;National Bank of Pakistan.
                    </p>
                    <p>
                        <strong>Bank Charges: </strong>shall mean and include Charges
                        as per Bank&rsquo;s latest schedule of charges including the
                        Transaction Acquiring Charges.
                    </p>
                    <p>
                        <strong>Donor(s):</strong>&nbsp;The person who intend to
                        donate funds to PM relief funds for COVID 19.
                    </p>
                    <p>
                        <strong>Designated Account</strong>: The PM&rsquo;s Relief
                        Fund for COVID-19 account opened at NBP Main Branch Khi.
                    </p>
                    <p>
                        <strong>Device(s) means</strong>: Mobile, digital tablets,
                        personal digital assistant or such other devices which may be
                        linked to the system of the Bank to access the services
                        through internet.
                    </p>
                    <p>
                        <strong>Services: &nbsp;</strong>shall mean and include such
                        banking transactions as may be available and provided to the
                        DONOR through its e-payments and m-payments modules for
                        donation in PM relief fund for COVID 19.
                    </p>
                    <p>
                        <strong>NBP e-Payments:</strong> The brand name used for
                        NBP&rsquo;s Web Portal.
                    </p>
                    <p>
                        <strong>NBP m-Payments:</strong> The brand name used for
                        NBP&rsquo;s Mobile Application.
                    </p>
                    <p>
                        <strong>Service Software</strong>: Web Portal or Mobile
                        Application that Donor will access for donation to the PM
                        relief fund for COVID 19 from his / her computer or Mobile
                        Device.
                    </p>
                    <p>
                        <strong>Transaction </strong>or<strong> Instruction:
                        </strong>The transfer of any payment by the Donor to the Designated
                        Account for the collection of donations through the use of the
                        Services.
                    </p>
                    <ol start="2">
                        <li><strong> In these Terms and Conditions,
                            unless the context shall otherwise require:</strong></li>
                    </ol>
                    <ol>
                        <li>References to &ldquo;we&rdquo;, &ldquo;us&rdquo; or
                            &ldquo;our&rdquo; are references to NBP/Bank.</li>
                        <li>References to &ldquo;you&rdquo; or &ldquo;your&rdquo;
                            are references to the Donor.</li>
                        <li>The words &ldquo;include&rdquo; and
                            &ldquo;including&rdquo; shall not be construed as having any
                            limiting effect;</li>
                        <li>The singular includes the plural and vice versa;</li>
                        <li>A gender includes other genders;</li>
                        <li>The headings are used for convenience only and do not
                            affect the interpretation of these Terms and Conditions;</li>
                        <li>A reference to a document includes the document as
                            modified from time to time and any document replacing it; and</li>
                    </ol>
                    <ol start="3">
                        <li><strong> Availability of Services.</strong></li>
                    </ol>
                    <ol>
                        <li>The Service will be available only for Donors (as
                            defined herein).</li>
                        <li>In order to use the services, the Donors must fill in
                            all required information to process the payment.</li>
                        <li>The Service will only be available on Devices which
                            meet the required specifications and configurations as
                            specified by the Bank from time to time. Accordingly, you
                            agree to procure and maintain a Device accessing internet and
                            data connection which meet these requirements at your own
                            expense.</li>
                        <li>By accessing/availing the Services, you must be aware
                            that the Bank at its sole discretion may, without any prior
                            intimation or notice, discontinue the Services at any time.</li>
                        <li>You irrevocably and unconditionally accept as binding
                            any Service availed and/or transaction and/or instruction
                            made or given through the Service by you at your own risk and
                            responsibility.</li>
                        <li>Bank's records of any transaction/service
                            processed/availed/executed through NBP e-payments and/or
                            m-Payments shall constitute binding and conclusive evidence
                            of such transaction/services conducted by you.</li>
                        <li>By availing the services, you accept that all
                            instructions made or given by you through device in respect
                            of Services shall be irrevocable and irreversible.</li>
                    </ol>
                    <ol start="4">
                        <li><strong> DEVICE COMPATIBILITY </strong></li>
                    </ol>
                    <ol>
                        <li>NBP m-Payments Application will be a native Mobile
                            Application on following platforms:</li>

                        <ol>
                            <li>Android Phones &ndash; Android Version Gingerbread
                                (2.3-2.7) and above</li>
                            <li>iPhone &ndash; iOS version 7.1.2 and above</li>
                        </ol>

                        <li>The Service will only be available on Devices which
                            meet the required specifications and configurations as
                            specified by the Bank from time to time.</li>
                        <li>The Bank shall not be liable to you for any loss
                            whatsoever that you may suffer as a result of any
                            incompatibility between the Service Software and any Device
                            from which you access the service.</li>
                    </ol>
                    <p>&nbsp;</p>
                    <ol start="5">
                        <li><strong> RESPONSIBILITIES AND OBLIGATIONS OF
                            THE DONOR</strong></li>
                    </ol>
                    <ol>
                        <li>The customer is/ you are solely responsible to follow
                            instructions to avail Services and to adopt the security
                            protocols and such other guidelines as may be provided by the
                            Bank from time to time whether through notifications on its
                            website/mobile application or otherwise.</li>
                        <li>You must not allow anyone else to operate the Service
                            on your behalf. In case of breach of this condition NBP shall
                            not be liable for any loss and/or damage which may
                            consequently occur to you.</li>
                        <li>You must not leave the Device unattended while you
                            are using the Application. In case of breach of this
                            condition NBP shall not be liable for any loss and/or damage
                            which may consequently occur to you.</li>
                        <li>You will be held liable for all losses and expenses
                            due to unauthorized use, if you have acted fraudulently or,
                            with gross negligence, with intentional misconduct or if you
                            are in default of any of the obligations described in these
                            terms and conditions.</li>
                    </ol>
                    <ol start="6">
                        <li><strong> Liability for unauthorized
                            instructions:</strong></li>
                    </ol>
                    <p>The Bank will not be liable for misuse of your device by
                        any un-authorized person. In this respect, you are liable to
                        take care in complying with all the security
                        procedures/protocols and instructions passed on by the bank
                        from time to time in this respect.</p>
                    <ol start="7">
                        <li><strong> NBP&rsquo;S OBLIGATIONS TO ITS
                            CUSTOMERS</strong></li>
                    </ol>
                    <p>The Bank is responsible to act on your Instructions
                        received through this Service without obtaining any further
                        written or other confirmation from you, even if those
                        instructions are not actually given or authorized by you.</p>
                    <ol start="8">
                        <li><strong> NBP&rsquo;S AUTHORITY</strong></li>
                    </ol>
                    <p>The Bank has the absolute right to
                        change/revise/amend/modify the terms and conditions contained
                        herein and charges / Transaction Acquiring Charges with or
                        without prior notice.</p>
                    <ol>
                        <li>NBP, in its sole discretion, will be entitled to
                            refuse to carry out an instruction submitted through this
                            service.</li>
                        <li>The Bank will in no event be liable for any damages,
                            including without limitation direct or indirect loss,
                            special, incidental, or consequential damages, losses or
                            expenses arising in connection with these Services and/ or
                            inability to use, or any failure of performance, error,
                            omission, interruption, defect, delay in operation or
                            transmission, computer virus or line or system failure in
                            connection with the services.</li>
                        <li>The information and material provided by the Bank in
                            relation to the Service, including text, graphics, links or
                            other items is/are provided on "as is", "as available" basis.
                            The Bank does not warrant the accuracy, adequacy or
                            completeness of this information and materials and expressly
                            disclaims liability for errors or omissions in this
                            information and material. No warranty of any kind, implied,
                            expressed or statutory including but not limited to the
                            warranties of non-infringement of third party rights, title,
                            merchantability, fitness for a particular purpose and freedom
                            from computer virus, is given in conjunction with the said
                            information and materials.</li>
                    </ol>
                    <ol start="9">
                        <li><strong> &nbsp;PROTECTING AGAINST VIRUSES</strong></li>
                    </ol>
                    <p>You must take all reasonable measures to ensure that any
                        device from which you have access to NBP e-Payment
                        portal/mPayment mobile application is free of any viruses also
                        commonly known as malicious softwares, spywares, Trojan, bugs
                        etc. and is adequately maintained in every way.</p>
                    <p>You must ensure that any Device you use to access the
                        Service is adequately protected against Viruses.</p>
                    <ol start="10">
                        <li><strong>ACCESSING MOBILE BANKING APPLICATION
                            THROUGH THIRD PARTY SERVICES</strong></li>
                    </ol>
                    <p>The Bank cannot be held responsible for any channel
                        (third party connectivity) through which you access the
                        mpayment mobile application that are not controlled by the
                        Bank, or for any loss you may suffer as a result of using such
                        channel. You must comply with all the terms and conditions and
                        are responsible to pay all the charges, damages etc. connected
                        with it.</p>
                    <ol start="11">
                        <li><strong> BANK&rsquo;S CHARGES</strong></li>
                    </ol>
                    <p>The Bank is entitled to charge and recover fees
                        (including Transaction Acquiring charges) for the Service
                        which shall be as per the Bank's applicable schedule of
                        charges &nbsp;or available on the website/mobile application.</p>
                    <ol start="12">
                        <li><strong> Recording Keeping / Logs </strong></li>
                    </ol>
                    <p>&nbsp; The Bank will keep a record of all instructions
                        given by customers via the Service.</p>
                    <ol start="13">
                        <li><strong> ADVERTISING OF BANK&rsquo;S
                            PRODUCTS THROUGH THE SERVICE</strong></li>
                    </ol>
                    <p>From time to time the Bank may advertise its own
                        products and services through the Service.</p>
                    <ol start="14">
                        <li><strong> UNAUTHORIZED USE OF THE
                            INFORMATION, MATERIALS AND TRADE MARKS</strong></li>
                    </ol>
                    <p>You fully understand and agree that the unauthorized use
                        of the Services, trademarks and systems including but are not
                        limited to unauthorized entry into the Bank's systems, misuse
                        of the Bank's trademarks or misuse of any information made
                        available through the Services is strictly prohibited and may
                        lead to legal action against you. Your eligibility for
                        Services is subject to final determination by the Bank.</p>
                    <p>
                        <strong>&nbsp;</strong>
                    </p>
                    <ol start="15">
                        <li><strong> DISCLOSURE REQUIREMENTS</strong></li>
                    </ol>
                    <p>The Bank shall make reasonable endeavors to preserve
                        your secrecy and personal information (&ldquo;PI&rdquo;).
                        Nevertheless, you hereby expressly agree, acknowledge and
                        authorize the Bank to disclose PI, without any notice to you,
                        in the following events:</p>
                    <ol>
                        <li>It is required by any investigation/law enforcement
                            agency; regulatory body, judicial and/or Quasi-judicial
                            authority; and/or under any subpoena; and/or</li>
                        <li>It is required to be disclosed as per applicable laws
                            and/or banking practices; and/or</li>
                        <li>The Bank may consider it necessary to disclose to any
                            person, entity, body, corporate, authority etc.</li>
                    </ol>
                    <ol start="16">
                        <li><strong> THE GOVERNING LAW</strong></li>
                    </ol>
                    <p>These Terms and Conditions are governed by the laws of
                        Islamic Republic of Pakistan. Both parties agree to submit to
                        the jurisdiction of the Courts in Pakistan in connection with
                        any dispute arising from / or in connection with the services
                        availed by the customer.</p>
                    <ol start="17">
                        <li><strong> Refund &amp; Cancellation </strong></li>
                    </ol>
                    <p>once the Instructions have been given and the
                        Transaction done, it is not possible to reverse the
                        transaction and/or refund the payment. By the use of Service,
                        you acknowledge that the Transaction / Instruction shall be
                        irreversible.</p>
                    <ol start="18">
                        <li><strong> Disputed Transactions</strong></li>
                    </ol>
                    <p>For any disputes, please contact your (Issuer) Bank and
                        your (Issuer) Bank will contact respective Payment Scheme
                        (Master, Visa or Other) for resolution by contacting to
                        acquirer.</p>
                    <p>I confirm that I have read, understood, acknowledge and
                        agree to the above-mentioned terms and conditions.&nbsp;</p>

                </DialogContent>

                <DialogActions>
                    <Button onClick={close} color="primary">
                        Close
                    </Button>
                </DialogActions>

            </Dialog>
        </div >
    );
}

export default React.memo(TermsAndConditionModal)
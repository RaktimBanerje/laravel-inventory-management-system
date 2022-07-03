import React from 'react'
import axios from "axios"
import { useForm } from '@inertiajs/inertia-react'
import { Inertia } from '@inertiajs/inertia'

const TwoFactorAuthenticationForm = () => {

    const { user } = props
    const { two_factor_enabled } = user

    const [enabling, setEnabling] = React.useState(false)
    const [disabling, setDisabling] = React.useState(false)

    const [qrCode, setQrCode] = React.useState(null)
    const [recoveryCodes, setRecoveryCodes] = React.useState([])

    const [twoFactorEnabled, setTwoFactorEnabled] = React.useState(undefined)

    const enableTwoFactorAuthentication = () => {
        enabling = true

        Inertia.post('/user/two-factor-authentication', {
            preserveScroll: true,
            onSuccess: () => Promise.all([
                showQrCode(),
                showRecoveryCodes(),
            ]),
            onFinish: () => (setEnabling(false)),
        })
    }

    const showQrCode = () => {
        axios.get('/user/two-factor-qr-code')
            .then(response => {
                setQrCode(response.data.svg)
            })
    }

    const showRecoveryCodes = () => {
        axios.get('/user/two-factor-recovery-codes')
            .then(response => {
                setRecoveryCodes(response.data)
            })
    }

    const regenerateRecoveryCodes = () => {
        axios.post('/user/two-factor-recovery-codes')
                .then(response => {
                    showRecoveryCodes()
                })
    }

    const disableTwoFactorAuthentication = () => {
        disabling = true

        Inertia.delete('/user/two-factor-authentication', {
            preserveScroll: true,
            onSuccess: () => (setDisabling(false)),
        })
    }

    React.useEffect(() => {
        setTwoFactorEnabled( !enabling && $page.props.user.two_factor_enabled )
    }, [enabling, two_factor_enabled])

    return (
        <div class="row my-4">
            <div class="col-sm-4">
                <h3>Two Factor Authentication</h3>
                <p> Add additional security to your account using two factor authentication.</p>
            </div>
            <div class="col-sm-8 border border-secondary p-3" style={{backgroundColor: "#ffffff", boxShadow: "0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)"}}>
                <h3>{twoFactorEnabled ? "You have enabled two factor authentication." : "You have not enabled two factor authentication."}</h3>
                <p>When two factor authentication is enabled, you will be prompted for a secure, random token during authentication. You may retrieve this token from your phone's Google Authenticator application.</p>

                {twoFactorEnabled ? (
                    <>
                        {qrCode && <p class="font-weight-bold">Two factor authentication is now enabled. Scan the following QR code using your phone's authenticator application.</p>}
                        {recoveryCodes.length > 0 && 
                            <>
                                <p class="font-weight-bold">Store these recovery codes in a secure password manager. They can be used to recover access to your account if your two factor authentication device is lost.</p>
                                <ul>{recoveryCodes.map((recoveryCode, index) => <li key={index}>{recoveryCode}</li>)}</ul>
                            </>
                        }
                    </>
                ) : (
                    <button class="btn btn-dark font-weight-bold text-uppercase" disabled={enabling} onClick={enableTwoFactorAuthentication}>Enable</button>
                )}

                {twoFactorEnabled && (
                    <>
                        {recoveryCodes.length > 0 && <button class="btn btn-dark" onClick={regenerateRecoveryCodes}>Regenerate Recovery Codes</button>}
                        {recoveryCodes.length === 0 && <button class="btn btn-dark" onClick={showRecoveryCodes}>Show Recovery Codes</button>}
                        <button class="btn btn-danger font-weight-bold text-uppercase" disabled={disabling} onClick={disableTwoFactorAuthentication}>Disable</button>
                    </>
                )}
            </div>

        </div>
    )
}

export default TwoFactorAuthenticationForm
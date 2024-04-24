import { useState } from "react";
// import waEmbed from "../wa-support";

const WACS = () =>{

    const wa_btnSetting = {
        "btnColor":"#16BE45",
        "ctaText":"Hubungi Kami",
        "cornerRadius":40,
        "marginBottom":40,
        "marginLeft":20,
        "marginRight":20,
        "btnPosition":"right",
        "whatsAppNumber":"6282248194472",
        "welcomeMessage":"Halo, saya ingin bertanya terkait aplikasi SIGPetaKotGor dan pemetaan lahan pertanian di Kota Gorontalo",
        "zIndex":999999,
        "btnColorScheme":"dark"
    };

    const wa_widgetSetting = {
        "title":"Tim KotGor",
        "subTitle":"SIG KotGor - Universitas Negeri Gorontalo",
        "headerBackgroundColor":"#69e789",
        "headerColorScheme":"light",
        "greetingText":"Halo, ada yang bisa Tim KotGor bantu ?",
        "ctaText":"klik untuk chat",
        "btnColor":"#29dd20",
        "cornerRadius":40,
        "welcomeMessage":"Hello",
        "btnColorScheme":"light",
        "brandImage":"https://www.knowmuhammad.org/img/noavatarn.png",
        "darkHeaderColorScheme":{"title":"#333333","subTitle":"#4F4F4F"}
    };
    function openWacsButton(o){
            return o ? document.getElementById("wa_widget-content") ? void(document.getElementById("wa_widget-content").style.display = "block") : (e = d, t = i, (e = document.createElement("div")).setAttribute("id", "wa-widget-wrapper"), e = n(e, t), document.body.appendChild(e), document.getElementById("wa-widget-button").addEventListener("click", e => window.open(`https://wa.me/${t.whatsAppNumber}?text=` + encodeURIComponent(t.welcomeMessage || ""), "_blank")), void document.getElementById("wa-widget-close-btn").addEventListener("click", e => {
              document.getElementById("wa_widget-content").style.display = "none"
            })) : window.open(`https://wa.me/${i.whatsAppNumber}?text=` + encodeURIComponent(i.welcomeMessage || ""), "_blank");
            var e, t
    }

    function clickToChat(e){
        window.open(`https://wa.me/${wa_btnSetting.whatsAppNumber}?text=` + encodeURIComponent(wa_btnSetting.welcomeMessage || ""), "_blank")
    }

    function closeButton (e){
            document.getElementById("wa_widget-content").style.display = "none"
    }
    
    
    return (
        <>
            <div id="wa-btn-wrapper" style={{position: 'fixed', zIndex: 999999, bottom: '40px', right: '20px'}}>
                <div id="wa_btn-content" style={{background: "#16BE45", borderRadius: "40px"}} onClick={openWacsButton}>
                    <svg width="25" height="25" viewBox="0 0 25 25" fill="none" color="#FFF" xmlns="http://www.w3.org/2000/svg">
                        <path d="M18.1225 14.9458C17.8183 14.7895 16.3033 14.0473 16.0215 13.9469C15.7397 13.8409 15.5332 13.7907 15.3295 14.1032C15.123 14.4129 14.5371 15.102 14.3529 15.3113C14.1744 15.5178 13.993 15.5429 13.6889 15.3894C11.8808 14.4854 10.695 13.7767 9.50361 11.7315C9.18832 11.1874 9.8189 11.2265 10.4076 10.0518C10.5081 9.84534 10.4578 9.66956 10.3797 9.51331C10.3016 9.35706 9.68776 7.84478 9.43106 7.22815C9.18274 6.62826 8.92604 6.71197 8.7391 6.70081C8.56053 6.68965 8.35684 6.68965 8.15037 6.68965C7.9439 6.68965 7.61187 6.76777 7.33006 7.0719C7.04825 7.38161 6.25305 8.12659 6.25305 9.63887C6.25305 11.1511 7.35517 12.616 7.50584 12.8225C7.66209 13.0289 9.67381 16.1316 12.7625 17.4681C14.7157 18.3107 15.4802 18.3833 16.4567 18.2382C17.051 18.1489 18.2759 17.496 18.5298 16.7734C18.7837 16.0535 18.7837 15.4369 18.7084 15.3085C18.6331 15.1718 18.4266 15.0937 18.1225 14.9458Z" fill="#333333"></path>
                        <path d="M24.0292 7.65625C23.3986 6.15792 22.4946 4.81306 21.3422 3.65792C20.198 2.50948 18.8395 1.5966 17.3439 0.970982C15.8093 0.326451 14.1798 0 12.5002 0H12.4444C10.7535 0.00837054 9.11567 0.343192 7.57549 1.00167C6.09267 1.63371 4.74699 2.54821 3.61344 3.6942C2.47226 4.84654 1.57661 6.18583 0.95719 7.67857C0.315449 9.22433 -0.00821224 10.8677 0.000158294 12.5586C0.00962607 14.4963 0.468048 16.4054 1.33944 18.1362V22.3772C1.33944 22.7176 1.47467 23.0441 1.71537 23.2848C1.95607 23.5255 2.28253 23.6607 2.62293 23.6607H6.86679C8.59752 24.5321 10.5067 24.9905 12.4444 25H12.5029C14.1743 25 15.7954 24.6763 17.3216 24.043C18.8097 23.4248 20.163 22.5226 21.306 21.3867C22.4583 20.2455 23.3651 18.9118 23.9985 17.4247C24.657 15.8845 24.9918 14.2467 25.0002 12.5558C25.0085 10.8566 24.6793 9.20759 24.0292 7.65625ZM19.8132 19.8772C17.8573 21.8136 15.2624 22.8795 12.5002 22.8795H12.4527C10.7702 22.8711 9.09893 22.4526 7.62293 21.6657L7.38855 21.5402H3.45998V17.6116L3.33442 17.3772C2.54759 15.9012 2.12906 14.2299 2.12069 12.5474C2.10953 9.76562 3.17259 7.15402 5.12293 5.18694C7.07047 3.21987 9.67371 2.1317 12.4555 2.12054H12.5029C13.898 2.12054 15.2513 2.39118 16.5264 2.9269C17.7708 3.44866 18.8869 4.19922 19.8467 5.15904C20.8037 6.11607 21.5571 7.23493 22.0788 8.47935C22.6201 9.76841 22.8908 11.1356 22.8852 12.5474C22.8685 15.3265 21.7775 17.9297 19.8132 19.8772Z" fill="#333333"></path>
                    </svg>
                    <p className="text-[#333333] ml-[inherit]" 
                    >
                        {wa_btnSetting.ctaText}
                    </p>
                </div>
                <div id="wa-widget-wrapper" 
                style={{position:"fixed", zIndex: 999999, bottom: "95px", right: "20px"}}
                >
                <div id="wa_widget-content" className="hidden">
                    <div className="wa_widget-brand-container" style={{background: "#69e789"}}>
                        <div>
                            <img className="wa_widget-brand-image" src="https://www.knowmuhammad.org/img/noavatarn.png"></img>
                        </div>
                        <div className="wa_widget-brand-info">
                            <h4 className="text-white">{wa_widgetSetting.title}</h4>
                            <p className="text-white">{wa_widgetSetting.subTitle}</p>
                        </div>
                        <div className="wa_widget-close-btn" id="wa-widget-close-btn" onClick={closeButton}>
                            <svg height="12" width="12" viewport="0 0 12 12" version="1.1" xmlns="http://www.w3.org/2000/svg">
                                <line x1="1" y1="11" x2="11" y2="1" stroke="white" strokeWidth="2"></line>
                                <line x1="1" y1="1" x2="11" y2="11" stroke="white" strokeWidth="2"></line>
                            </svg>
                    </div>
                </div>
                <div className="wa_widget-message-container">
                    <div className="wa_widget-message">
                        <h4>{wa_widgetSetting.title}</h4>
                        <p>{wa_widgetSetting.greetingText}</p>
                    </div>
                </div>
                <div className="wa_widget-button-container">
                    <div className="wa_widget-button" id="wa-widget-button" 
                    style={{background: "#29dd20", borderRadius: "40px"}}
                    onClick={clickToChat}
                    >
                        <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M18.1225 14.9458C17.8183 14.7895 16.3033 14.0473 16.0215 13.9469C15.7397 13.8409 15.5332 13.7907 15.3295 14.1032C15.123 14.4129 14.5371 15.102 14.3529 15.3113C14.1744 15.5178 13.993 15.5429 13.6889 15.3894C11.8808 14.4854 10.695 13.7767 9.50361 11.7315C9.18832 11.1874 9.8189 11.2265 10.4076 10.0518C10.5081 9.84534 10.4578 9.66956 10.3797 9.51331C10.3016 9.35706 9.68776 7.84478 9.43106 7.22815C9.18274 6.62826 8.92604 6.71197 8.7391 6.70081C8.56053 6.68965 8.35684 6.68965 8.15037 6.68965C7.9439 6.68965 7.61187 6.76777 7.33006 7.0719C7.04825 7.38161 6.25305 8.12659 6.25305 9.63887C6.25305 11.1511 7.35517 12.616 7.50584 12.8225C7.66209 13.0289 9.67381 16.1316 12.7625 17.4681C14.7157 18.3107 15.4802 18.3833 16.4567 18.2382C17.051 18.1489 18.2759 17.496 18.5298 16.7734C18.7837 16.0535 18.7837 15.4369 18.7084 15.3085C18.6331 15.1718 18.4266 15.0937 18.1225 14.9458Z" fill="white"></path>
                        <path d="M24.0292 7.65625C23.3986 6.15792 22.4946 4.81306 21.3422 3.65792C20.198 2.50948 18.8395 1.5966 17.3439 0.970982C15.8093 0.326451 14.1798 0 12.5002 0H12.4444C10.7535 0.00837054 9.11567 0.343192 7.57549 1.00167C6.09267 1.63371 4.74699 2.54821 3.61344 3.6942C2.47226 4.84654 1.57661 6.18583 0.95719 7.67857C0.315449 9.22433 -0.00821224 10.8677 0.000158294 12.5586C0.00962607 14.4963 0.468048 16.4054 1.33944 18.1362V22.3772C1.33944 22.7176 1.47467 23.0441 1.71537 23.2848C1.95607 23.5255 2.28253 23.6607 2.62293 23.6607H6.86679C8.59752 24.5321 10.5067 24.9905 12.4444 25H12.5029C14.1743 25 15.7954 24.6763 17.3216 24.043C18.8097 23.4248 20.163 22.5226 21.306 21.3867C22.4583 20.2455 23.3651 18.9118 23.9985 17.4247C24.657 15.8845 24.9918 14.2467 25.0002 12.5558C25.0085 10.8566 24.6793 9.20759 24.0292 7.65625ZM19.8132 19.8772C17.8573 21.8136 15.2624 22.8795 12.5002 22.8795H12.4527C10.7702 22.8711 9.09893 22.4526 7.62293 21.6657L7.38855 21.5402H3.45998V17.6116L3.33442 17.3772C2.54759 15.9012 2.12906 14.2299 2.12069 12.5474C2.10953 9.76562 3.17259 7.15402 5.12293 5.18694C7.07047 3.21987 9.67371 2.1317 12.4555 2.12054H12.5029C13.898 2.12054 15.2513 2.39118 16.5264 2.9269C17.7708 3.44866 18.8869 4.19922 19.8467 5.15904C20.8037 6.11607 21.5571 7.23493 22.0788 8.47935C22.6201 9.76841 22.8908 11.1356 22.8852 12.5474C22.8685 15.3265 21.7775 17.9297 19.8132 19.8772Z" fill="white"></path>
                        </svg>
                        <p className="text-white">{wa_widgetSetting.ctaText}</p>
                    </div>
                </div>
            </div>
            </div>
            </div>
        </>

    )
}

export default WACS;
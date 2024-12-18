import TextComponent from "./TextComponent";

function withFancyText(WrappedComponent){
    return function({...props}){
        const style = {fontStyle: "italic"};
        return (
            <div>
                <WrappedComponent {...props} style={style}/>
            </div>
        )
    }
}

export const WrappedWithFancy = withFancyText(TextComponent);
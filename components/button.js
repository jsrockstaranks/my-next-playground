const btnStyle = {
    minHeight: '40px',
    minWidth: '100px',
    cursor: 'pointer',
    fontWeight: 'bold'
};
export const Button = ({handler, label}) => {
    return <button style={btnStyle} onClick={handler}>{label}</button>
}
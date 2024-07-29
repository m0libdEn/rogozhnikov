import Header from "../components/Header"

interface Props {
    Component:() => JSX.Element
}

const PageWrapper:React.FC<Props>=({Component}) => {
    return<>
    <Header/>
    {Component}
    </>
}

export default PageWrapper;
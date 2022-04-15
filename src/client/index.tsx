import CompositeProvider from "./components/modules/providers/composite/composite.providers"
import { HomeTemplate } from "./components/templates/home.template"

export const App = () => {
    return (
        <CompositeProvider>
            <HomeTemplate />
        </CompositeProvider>
    )
}

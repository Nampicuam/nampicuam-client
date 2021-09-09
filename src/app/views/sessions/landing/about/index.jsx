import React from 'react'
import Writer from './writer'

const Index = () => {
    return (
        <div style={{ marginTop: '6%' }}>
            <div className="container-fluid">
                <h1>About</h1>
                <div className="row">
                    <div className="col-md-4">
                        <Writer
                            title={'Church History'}
                            description={
                                "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard"
                            }
                            src={
                                'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAO0AAADVCAMAAACMuod9AAAAV1BMVEX///8AAADq6up7e3t3d3f7+/tbW1tXV1czMzMsLCz8/Pz4+PiZmZmwsLCoqKiOjo4UFBSysrINDQ29vb2NjY2CgoKampry8vI2NjZsbGxPT08qKioXFxdK5JMPAAAD1UlEQVR4nO3d227iQBCEYc8SNuEUwMQ57vs/59IkbAjYnpnq7hmvVP8lUVr5LkCKsFRNwxhjjDHGGGOMsZ5+TSxP63IdJtbK17qb3U2ibtZ6ak/WTfvgdD63wyKE9b2T9mR9bJqwcDmf234XwnbV/HbRnq0T0X5ZGxftt3US2n9WD+2ldQLaC6u99qe1unbfXlittdfWytrNT6ut9tZaVXtjtdT2WStqN8e/Zju/etFK22+tpu21WmmHrJW0A1Yb7XzQWkU7aLXQnqyboZ8W145Y9dpxa3HtqFWrjVkLayNWnTZuLaqNWjXa+TZuLahNsOLaNGsxrVjXMSuqTbUW0iZaMW26tYg22Ypoc6wFtBnWfG2e1V37mGPN1eZanbUn6zLjF3K0+VZXbbY1R4tYHbWANV27OlrbbKubFrKmalGrkxa0pmlP1j1wvHHRwtYUrVh3oNVBq7DGtTqruVZljWm1VmOt0jqu1VtNtWrrmHb1FMLioDreGGoNrMPa5Zt8r951M13d8YbyxGetgXVYO7d82MGiZ711TPv+YvAIy0v4MDmzCAbWMe29yX2j9+0DtflRK1GLRC0QtUDUStQiUQtELRC1ErVI1AJRC0StRC0StUDUAlErUYtELRC1QNRK1CJRC0QtELUStUjUAlELRK1ELRK1QNQCUStRi0QtELVA1ErUIlELRC0QtRK1SNQCUQtErUQtErVA1AJRK1GLRC0QtUDUStQiUQtELRC1ErVI1AJRC0StRC0StUDUAlErUYtELRC1QNRK1CJRC0QtELUStUjUAlELRK1ELRK1QNQCUSuZaT9WBnsFq4dgMntw76pdPteesLjOTyv7zu2dRbM/YaY80clUSXjr3+7Ta4e3rIFe1e/bwyKEp6G9HK3W1Kr/lNrvbrbnL9Npja1abcSq05pbddqoVaN1sGq0CVZc62LFtfs2wYpqnayodpNmxbRuVkybbEW0jlZEm7RRfi5X62rN12ZZc7XO1lxtpjVPO/e25mmzrTnakxXaxs0oXQtY07VFrOlayJqqLWRN1YLWNG0xa5oWtqZosY1ysLhWYY1ri1rjWrGuUWtMW9ga0yqt49ri1nGt2jqmrWAd0xpYh7VVrMPaRwvrkLaSdUhrsmUt9WmrWfu1ZtY+bUVrn9bQequV7fm2lvVWa2q91la2XmuNrT+1J+ve8Hh+l1pz66VWrLu61kutg/VbOwnrt9bFetZOxHrWOlk/tZOxfmrdrKJ9P/6vvji4HM/vNWz8rKI9tuu62STqdp7WL+2UcrQeM3iExTRPK2OMMcYYY4wx9v/2FyToQsnl7bGCAAAAAElFTkSuQmCC'
                            }
                            posted={'Last updated 3 mins ago'}
                        />
                    </div>
                    <div className="col-md-4">
                        <Writer
                            title={'Services'}
                            description={
                                "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard"
                            }
                            posted={'Last updated 3 mins ago'}
                            src={
                                'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAO0AAADVCAMAAACMuod9AAAAV1BMVEX///8AAADq6up7e3t3d3f7+/tbW1tXV1czMzMsLCz8/Pz4+PiZmZmwsLCoqKiOjo4UFBSysrINDQ29vb2NjY2CgoKampry8vI2NjZsbGxPT08qKioXFxdK5JMPAAAD1UlEQVR4nO3d227iQBCEYc8SNuEUwMQ57vs/59IkbAjYnpnq7hmvVP8lUVr5LkCKsFRNwxhjjDHGGGOMsZ5+TSxP63IdJtbK17qb3U2ibtZ6ak/WTfvgdD63wyKE9b2T9mR9bJqwcDmf234XwnbV/HbRnq0T0X5ZGxftt3US2n9WD+2ldQLaC6u99qe1unbfXlittdfWytrNT6ut9tZaVXtjtdT2WStqN8e/Zju/etFK22+tpu21WmmHrJW0A1Yb7XzQWkU7aLXQnqyboZ8W145Y9dpxa3HtqFWrjVkLayNWnTZuLaqNWjXa+TZuLahNsOLaNGsxrVjXMSuqTbUW0iZaMW26tYg22Ypoc6wFtBnWfG2e1V37mGPN1eZanbUn6zLjF3K0+VZXbbY1R4tYHbWANV27OlrbbKubFrKmalGrkxa0pmlP1j1wvHHRwtYUrVh3oNVBq7DGtTqruVZljWm1VmOt0jqu1VtNtWrrmHb1FMLioDreGGoNrMPa5Zt8r951M13d8YbyxGetgXVYO7d82MGiZ711TPv+YvAIy0v4MDmzCAbWMe29yX2j9+0DtflRK1GLRC0QtUDUStQiUQtELRC1ErVI1AJRC0StRC0StUDUAlErUYtELRC1QNRK1CJRC0QtELUStUjUAlELRK1ELRK1QNQCUStRi0QtELVA1ErUIlELRC0QtRK1SNQCUQtErUQtErVA1AJRK1GLRC0QtUDUStQiUQtELRC1ErVI1AJRC0StRC0StUDUAlErUYtELRC1QNRK1CJRC0QtELUStUjUAlELRK1ELRK1QNQCUSuZaT9WBnsFq4dgMntw76pdPteesLjOTyv7zu2dRbM/YaY80clUSXjr3+7Ta4e3rIFe1e/bwyKEp6G9HK3W1Kr/lNrvbrbnL9Npja1abcSq05pbddqoVaN1sGq0CVZc62LFtfs2wYpqnayodpNmxbRuVkybbEW0jlZEm7RRfi5X62rN12ZZc7XO1lxtpjVPO/e25mmzrTnakxXaxs0oXQtY07VFrOlayJqqLWRN1YLWNG0xa5oWtqZosY1ysLhWYY1ri1rjWrGuUWtMW9ga0yqt49ri1nGt2jqmrWAd0xpYh7VVrMPaRwvrkLaSdUhrsmUt9WmrWfu1ZtY+bUVrn9bQequV7fm2lvVWa2q91la2XmuNrT+1J+ve8Hh+l1pz66VWrLu61kutg/VbOwnrt9bFetZOxHrWOlk/tZOxfmrdrKJ9P/6vvji4HM/vNWz8rKI9tuu62STqdp7WL+2UcrQeM3iExTRPK2OMMcYYY4wx9v/2FyToQsnl7bGCAAAAAElFTkSuQmCC'
                            }
                        />
                    </div>
                    <div className="col-md-4">
                        <Writer
                            title={'Organizational Structure'}
                            description={
                                "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard"
                            }
                            src={
                                'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAO0AAADVCAMAAACMuod9AAAAV1BMVEX///8AAADq6up7e3t3d3f7+/tbW1tXV1czMzMsLCz8/Pz4+PiZmZmwsLCoqKiOjo4UFBSysrINDQ29vb2NjY2CgoKampry8vI2NjZsbGxPT08qKioXFxdK5JMPAAAD1UlEQVR4nO3d227iQBCEYc8SNuEUwMQ57vs/59IkbAjYnpnq7hmvVP8lUVr5LkCKsFRNwxhjjDHGGGOMsZ5+TSxP63IdJtbK17qb3U2ibtZ6ak/WTfvgdD63wyKE9b2T9mR9bJqwcDmf234XwnbV/HbRnq0T0X5ZGxftt3US2n9WD+2ldQLaC6u99qe1unbfXlittdfWytrNT6ut9tZaVXtjtdT2WStqN8e/Zju/etFK22+tpu21WmmHrJW0A1Yb7XzQWkU7aLXQnqyboZ8W145Y9dpxa3HtqFWrjVkLayNWnTZuLaqNWjXa+TZuLahNsOLaNGsxrVjXMSuqTbUW0iZaMW26tYg22Ypoc6wFtBnWfG2e1V37mGPN1eZanbUn6zLjF3K0+VZXbbY1R4tYHbWANV27OlrbbKubFrKmalGrkxa0pmlP1j1wvHHRwtYUrVh3oNVBq7DGtTqruVZljWm1VmOt0jqu1VtNtWrrmHb1FMLioDreGGoNrMPa5Zt8r951M13d8YbyxGetgXVYO7d82MGiZ711TPv+YvAIy0v4MDmzCAbWMe29yX2j9+0DtflRK1GLRC0QtUDUStQiUQtELRC1ErVI1AJRC0StRC0StUDUAlErUYtELRC1QNRK1CJRC0QtELUStUjUAlELRK1ELRK1QNQCUStRi0QtELVA1ErUIlELRC0QtRK1SNQCUQtErUQtErVA1AJRK1GLRC0QtUDUStQiUQtELRC1ErVI1AJRC0StRC0StUDUAlErUYtELRC1QNRK1CJRC0QtELUStUjUAlELRK1ELRK1QNQCUSuZaT9WBnsFq4dgMntw76pdPteesLjOTyv7zu2dRbM/YaY80clUSXjr3+7Ta4e3rIFe1e/bwyKEp6G9HK3W1Kr/lNrvbrbnL9Npja1abcSq05pbddqoVaN1sGq0CVZc62LFtfs2wYpqnayodpNmxbRuVkybbEW0jlZEm7RRfi5X62rN12ZZc7XO1lxtpjVPO/e25mmzrTnakxXaxs0oXQtY07VFrOlayJqqLWRN1YLWNG0xa5oWtqZosY1ysLhWYY1ri1rjWrGuUWtMW9ga0yqt49ri1nGt2jqmrWAd0xpYh7VVrMPaRwvrkLaSdUhrsmUt9WmrWfu1ZtY+bUVrn9bQequV7fm2lvVWa2q91la2XmuNrT+1J+ve8Hh+l1pz66VWrLu61kutg/VbOwnrt9bFetZOxHrWOlk/tZOxfmrdrKJ9P/6vvji4HM/vNWz8rKI9tuu62STqdp7WL+2UcrQeM3iExTRPK2OMMcYYY4wx9v/2FyToQsnl7bGCAAAAAElFTkSuQmCC'
                            }
                            posted={'Last updated 3 mins ago'}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Index

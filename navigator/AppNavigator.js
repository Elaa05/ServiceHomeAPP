import { createStackNavigator, createAppContainer } from 'react-navigation';
import Home from "../Home";
import Requestcustomer from '../Requestcustomer'
import Login from '../Login';
import Request from '../Request';
import History from '../History';
import Services from '../Services';
import Personmenu from '../Personmenu';
import FormCustomer from '../FormCustomer';
import Formhandyman from '../Formhandyman';
import Problemedescription from '../Problemedescription';
import ProblemLocation from '../ProblemLocation';
import Dateandtime from '../Dateandtime'; 
import Handymandetails from '../Handymandetails';
import Customers from '../Customers';
import Handymanprofil from '../Handymanprofil';
import tabNavigator from '../Tabnavigator';
import Navigationcustomer from '../Navigationcustomer';
import Aboutus from '../Aboutus';
import Profilehandymandetails from '../Profilehandymandetails';
import Navigationsignup from '../Navigationsignup'; 
import Handymandetailsforcustomer from '../Handymandetailsforcustomer';
import Confirmation from '../Confirmation'; 

const AppNavigator = createStackNavigator({
  Home: { screen: Home },
  Login: { screen: Login },
  TabNavigator: {
    screen: tabNavigator,
    navigationOptions:{
      headerTitle: 'Handyman Profile'
    }
  },
  Personmenu: { screen: Personmenu },
  FormCustomer: { screen: FormCustomer },
  Formhandyman: { screen: Formhandyman },
  Problemedescription: { screen: Problemedescription },
  Services: { screen: Services },
  ProblemLocation:{screen:ProblemLocation},
  Dateandtime:{screen:Dateandtime},
  Handymandetails:{screen:Handymandetails},
  Customers:{screen:Customers},
  Handymanprofil:{screen:Handymanprofil},
  History:{screen:History},
  Aboutus:{screen:Aboutus},
  Request:{screen:Request},
  Confirmation:{screen:Confirmation},
  Navigationcustomer:{screen:Navigationcustomer,
    navigationOptions:{
      headerTitle: 'Services'
  },

},
Requestcustomer:{screen:Requestcustomer},
Profilehandymandetails:{screen :Profilehandymandetails},
Handymandetailsforcustomer:{screen:Handymandetailsforcustomer},
Navigationsignup:{screen:Navigationsignup,
  navigationOptions:{
    headerTitle: 'Who are you ? '
},

 },




},
 {
    initialRouteName: 'Home'
  
  });

export default createAppContainer(AppNavigator);

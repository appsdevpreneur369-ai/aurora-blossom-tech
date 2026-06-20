import {
  title,
  description,
  mrAuto,
  mlAuto
} from "/styles/jss/novel-logiks.js";
import customSelectStyle from "/styles/jss/novel-logiks/customSelectStyle.js";

const contactStyle = {
  title,
  mrAuto,
  mlAuto,
  ...customSelectStyle,
  description: {
    ...description,
    marginBottom: "70px"
  },
  textCenter: {
    textAlign: "center!important"
  },
  selectUnderlineRoot: {
    "& > div": {
      marginTop: "13px"
    }
  },
  aboutUs: {
    padding: "80px 0px"
  }
};

export default contactStyle;

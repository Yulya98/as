import reducerVisiblePost from './reducerIsVisiblePost'
import reducerActiveAlbumId from './reducerActiveAlbumId';
import reducerActiveUserId from './reducerActiveUserId';
import reducerAlbum from "./reducerAlbums";
import reducerAuthor from "./reducerAuthor";
import reducerCity from "./reducerCity";
import reducerComment from "./reducerComment";
import reducerData from "./reducerData";
import reducerDeleteItem from "./reducerDeleteItem";
import reducerEmail from "./reducerEmail";
import reducerEmailUser from "./reducerEmailUser";
import reducerFlagForCheckPageCommentsOrProfile from "./reducerFlagForCheckPageCommentsOrProfile";
import reducerImages from "./reducerImages";
import reducerIsRegistrationUser from "./reducerIsRegistrationUser";
import reducerIsVisibleAlbum from "./reducerIsVisibleAlbum";
import reducerIsVisibleAuthorization from "./reducerIsVisibleAuthorization";
import reducerIsVisibleBiggerPhoto from "./reducerIsVisibleBiggerPhoto";
import reducerIsVisibleInformation from "./reducerIsVisibleInformation";
import reducerIsVisibleMultiAlbums from "./reducerIsVisibleMultiAlbums";
import reducerIsVisiblePosts from "./reducerIsVisiblePosts";
import reducerIsVisibleProfile from "./reducerIsVisibleProfile";
import reducerIsVisibleRegistration from "./reducerIsVisibleRegistration";
import reducerName from "./reducerName";
import reducerNameImg from "./reducerNameImg";
import reducerNameOfNewAlbum from "./reducerNameOfNewAlbum";
import reducerPassword from "./reducerPassword";
import reducerPath from "./reducerPath";
import reducerPosts from "./reducerPosts";
import reducerPseudonym from "./reducerPseudonym";
import reducerRegistrationEmail from "./reducerRegistrationEmail";
import reducerRegistrationPassword from "./reducerRegistrationPassword";
import reducerSphere from "./reducerSphere";
import reducerSrcPhotoBigger from "./reducerSrcPhotoBigger";
import reducerSubPosts from "./reducerSubPosts";
import reducerSurname from "./reducerSurname";
import reducerIdPost from "./reducerIdPost";
import reducerFlagForCheckAlbumInPosts from "./reducerFlagForCheckAlbumInPosts";
import reducerRegistrationUser from "./reducerIsRegistrationUser"
import { combineReducers } from 'redux'

export default combineReducers({
    reducerRegistrationUser,
    reducerActiveAlbumId,
    reducerActiveUserId,
    reducerAlbum,
    reducerAuthor,
    reducerCity,
    reducerComment,
    reducerData,
    reducerDeleteItem,
    reducerEmail,
    reducerEmailUser,
    reducerFlagForCheckPageCommentsOrProfile,
    reducerImages,
    reducerIsRegistrationUser,
    reducerIsVisibleAlbum,
    reducerIsVisibleAuthorization,
    reducerIsVisibleBiggerPhoto,
    reducerIsVisibleInformation,
    reducerIsVisibleMultiAlbums,
    reducerIsVisiblePosts,
    reducerIsVisibleProfile,
    reducerIsVisibleRegistration,
    reducerName,
    reducerNameImg,
    reducerNameOfNewAlbum,
    reducerPassword,
    reducerPath,
    reducerPosts,
    reducerPseudonym,
    reducerRegistrationEmail,
    reducerRegistrationPassword,
    reducerSphere,
    reducerSrcPhotoBigger,
    reducerSubPosts,
    reducerSurname,
    reducerIdPost,
    reducerVisiblePost,
    reducerFlagForCheckAlbumInPosts
});



import { connect } from 'react-redux';
import { Channels } from '../../components/channels/Channels.jsx';
import { fetchChannels } from "../../actions/channels/fetchChannels";
import { createChannel } from "../../actions/channels/createChannel";

const mapStateToProps = (state) => ({
    channels: state.channels.channelsList,
    isFetchingChannels: state.channels.isFetchingChannels,
    isUpdatingChannels: state.channels.isUpdatingChannels,
});

const mapDispatchToProps = (dispatch, ownProps) => ({
    fetchChannels: () => dispatch(fetchChannels()),
    createChannel: (channelName) => dispatch(createChannel(channelName)),
    switchChannel: (newChannel) => ownProps.switchChannel(newChannel),
});

const enhancer = connect(mapStateToProps, mapDispatchToProps);
const connectedComponent = enhancer(Channels);

export { connectedComponent as Channels };

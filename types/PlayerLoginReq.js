"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PlayerLoginReq = exports.PlayerLoginReq_CmdId = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
const AdjustTrackingInfo_1 = require("./AdjustTrackingInfo");
const TrackingIOInfo_1 = require("./TrackingIOInfo");
/**
 * @generated from protobuf enum PlayerLoginReq.CmdId
 */
var PlayerLoginReq_CmdId;
(function (PlayerLoginReq_CmdId) {
    /**
     * @generated from protobuf enum value: ENET_CHANNEL_ID = 0;
     */
    PlayerLoginReq_CmdId[PlayerLoginReq_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_CHANNEL_ID = 0;
     */
    PlayerLoginReq_CmdId[PlayerLoginReq_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    PlayerLoginReq_CmdId[PlayerLoginReq_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    PlayerLoginReq_CmdId[PlayerLoginReq_CmdId["IS_ALLOW_CLIENT"] = 1] = "IS_ALLOW_CLIENT";
    /**
     * @generated from protobuf enum value: CMD_ID = 189;
     */
    PlayerLoginReq_CmdId[PlayerLoginReq_CmdId["CMD_ID"] = 189] = "CMD_ID";
})(PlayerLoginReq_CmdId = exports.PlayerLoginReq_CmdId || (exports.PlayerLoginReq_CmdId = {}));
// @generated message type with reflection information, may provide speed optimized methods
class PlayerLoginReq$Type extends runtime_5.MessageType {
    constructor() {
        super("PlayerLoginReq", [
            { no: 1, name: "token", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 2, name: "client_version", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 3, name: "system_version", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 4, name: "device_name", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 5, name: "device_uuid", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 6, name: "target_uid", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 7, name: "login_rand", kind: "scalar", T: 4 /*ScalarType.UINT64*/, L: 0 /*LongType.BIGINT*/ },
            { no: 8, name: "is_editor", kind: "scalar", T: 8 /*ScalarType.BOOL*/ },
            { no: 9, name: "language_type", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 10, name: "account_type", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 11, name: "account_uid", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 12, name: "platform", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 13, name: "device_info", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 14, name: "platform_type", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 15, name: "is_guest", kind: "scalar", T: 8 /*ScalarType.BOOL*/ },
            { no: 16, name: "cloud_client_ip", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 17, name: "gm_uid", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 18, name: "checksum", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 19, name: "online_id", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 20, name: "client_token", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 21, name: "security_cmd_reply", kind: "scalar", T: 12 /*ScalarType.BYTES*/ },
            { no: 22, name: "extra_bin_data", kind: "scalar", T: 12 /*ScalarType.BYTES*/ },
            { no: 23, name: "cps", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 24, name: "channel_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 25, name: "sub_channel_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 26, name: "checksum_client_version", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 27, name: "tag", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 28, name: "tracking_io_info", kind: "message", T: () => TrackingIOInfo_1.TrackingIOInfo },
            { no: 29, name: "country_code", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 30, name: "client_data_version", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 31, name: "environment_error_code", kind: "scalar", T: 12 /*ScalarType.BYTES*/ },
            { no: 32, name: "target_home_owner_uid", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 33, name: "psn_id", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 34, name: "client_verison_hash", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 35, name: "is_transfer", kind: "scalar", T: 8 /*ScalarType.BOOL*/ },
            { no: 36, name: "reg_platform", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 37, name: "target_home_param", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 38, name: "adjust_tracking_info", kind: "message", T: () => AdjustTrackingInfo_1.AdjustTrackingInfo }
        ]);
    }
    create(value) {
        const message = { token: "", clientVersion: "", systemVersion: "", deviceName: "", deviceUuid: "", targetUid: 0, loginRand: 0n, isEditor: false, languageType: 0, accountType: 0, accountUid: "", platform: "", deviceInfo: "", platformType: 0, isGuest: false, cloudClientIp: 0, gmUid: 0, checksum: "", onlineId: "", clientToken: 0, securityCmdReply: new Uint8Array(0), extraBinData: new Uint8Array(0), cps: "", channelId: 0, subChannelId: 0, checksumClientVersion: "", tag: 0, countryCode: "", clientDataVersion: 0, environmentErrorCode: new Uint8Array(0), targetHomeOwnerUid: 0, psnId: "", clientVerisonHash: "", isTransfer: false, regPlatform: 0, targetHomeParam: 0 };
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* string token */ 1:
                    message.token = reader.string();
                    break;
                case /* string client_version */ 2:
                    message.clientVersion = reader.string();
                    break;
                case /* string system_version */ 3:
                    message.systemVersion = reader.string();
                    break;
                case /* string device_name */ 4:
                    message.deviceName = reader.string();
                    break;
                case /* string device_uuid */ 5:
                    message.deviceUuid = reader.string();
                    break;
                case /* uint32 target_uid */ 6:
                    message.targetUid = reader.uint32();
                    break;
                case /* uint64 login_rand */ 7:
                    message.loginRand = reader.uint64().toBigInt();
                    break;
                case /* bool is_editor */ 8:
                    message.isEditor = reader.bool();
                    break;
                case /* uint32 language_type */ 9:
                    message.languageType = reader.uint32();
                    break;
                case /* uint32 account_type */ 10:
                    message.accountType = reader.uint32();
                    break;
                case /* string account_uid */ 11:
                    message.accountUid = reader.string();
                    break;
                case /* string platform */ 12:
                    message.platform = reader.string();
                    break;
                case /* string device_info */ 13:
                    message.deviceInfo = reader.string();
                    break;
                case /* uint32 platform_type */ 14:
                    message.platformType = reader.uint32();
                    break;
                case /* bool is_guest */ 15:
                    message.isGuest = reader.bool();
                    break;
                case /* uint32 cloud_client_ip */ 16:
                    message.cloudClientIp = reader.uint32();
                    break;
                case /* uint32 gm_uid */ 17:
                    message.gmUid = reader.uint32();
                    break;
                case /* string checksum */ 18:
                    message.checksum = reader.string();
                    break;
                case /* string online_id */ 19:
                    message.onlineId = reader.string();
                    break;
                case /* uint32 client_token */ 20:
                    message.clientToken = reader.uint32();
                    break;
                case /* bytes security_cmd_reply */ 21:
                    message.securityCmdReply = reader.bytes();
                    break;
                case /* bytes extra_bin_data */ 22:
                    message.extraBinData = reader.bytes();
                    break;
                case /* string cps */ 23:
                    message.cps = reader.string();
                    break;
                case /* uint32 channel_id */ 24:
                    message.channelId = reader.uint32();
                    break;
                case /* uint32 sub_channel_id */ 25:
                    message.subChannelId = reader.uint32();
                    break;
                case /* string checksum_client_version */ 26:
                    message.checksumClientVersion = reader.string();
                    break;
                case /* uint32 tag */ 27:
                    message.tag = reader.uint32();
                    break;
                case /* TrackingIOInfo tracking_io_info */ 28:
                    message.trackingIoInfo = TrackingIOInfo_1.TrackingIOInfo.internalBinaryRead(reader, reader.uint32(), options, message.trackingIoInfo);
                    break;
                case /* string country_code */ 29:
                    message.countryCode = reader.string();
                    break;
                case /* uint32 client_data_version */ 30:
                    message.clientDataVersion = reader.uint32();
                    break;
                case /* bytes environment_error_code */ 31:
                    message.environmentErrorCode = reader.bytes();
                    break;
                case /* uint32 target_home_owner_uid */ 32:
                    message.targetHomeOwnerUid = reader.uint32();
                    break;
                case /* string psn_id */ 33:
                    message.psnId = reader.string();
                    break;
                case /* string client_verison_hash */ 34:
                    message.clientVerisonHash = reader.string();
                    break;
                case /* bool is_transfer */ 35:
                    message.isTransfer = reader.bool();
                    break;
                case /* uint32 reg_platform */ 36:
                    message.regPlatform = reader.uint32();
                    break;
                case /* uint32 target_home_param */ 37:
                    message.targetHomeParam = reader.uint32();
                    break;
                case /* AdjustTrackingInfo adjust_tracking_info */ 38:
                    message.adjustTrackingInfo = AdjustTrackingInfo_1.AdjustTrackingInfo.internalBinaryRead(reader, reader.uint32(), options, message.adjustTrackingInfo);
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? runtime_2.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message, writer, options) {
        /* string token = 1; */
        if (message.token !== "")
            writer.tag(1, runtime_1.WireType.LengthDelimited).string(message.token);
        /* string client_version = 2; */
        if (message.clientVersion !== "")
            writer.tag(2, runtime_1.WireType.LengthDelimited).string(message.clientVersion);
        /* string system_version = 3; */
        if (message.systemVersion !== "")
            writer.tag(3, runtime_1.WireType.LengthDelimited).string(message.systemVersion);
        /* string device_name = 4; */
        if (message.deviceName !== "")
            writer.tag(4, runtime_1.WireType.LengthDelimited).string(message.deviceName);
        /* string device_uuid = 5; */
        if (message.deviceUuid !== "")
            writer.tag(5, runtime_1.WireType.LengthDelimited).string(message.deviceUuid);
        /* uint32 target_uid = 6; */
        if (message.targetUid !== 0)
            writer.tag(6, runtime_1.WireType.Varint).uint32(message.targetUid);
        /* uint64 login_rand = 7; */
        if (message.loginRand !== 0n)
            writer.tag(7, runtime_1.WireType.Varint).uint64(message.loginRand);
        /* bool is_editor = 8; */
        if (message.isEditor !== false)
            writer.tag(8, runtime_1.WireType.Varint).bool(message.isEditor);
        /* uint32 language_type = 9; */
        if (message.languageType !== 0)
            writer.tag(9, runtime_1.WireType.Varint).uint32(message.languageType);
        /* uint32 account_type = 10; */
        if (message.accountType !== 0)
            writer.tag(10, runtime_1.WireType.Varint).uint32(message.accountType);
        /* string account_uid = 11; */
        if (message.accountUid !== "")
            writer.tag(11, runtime_1.WireType.LengthDelimited).string(message.accountUid);
        /* string platform = 12; */
        if (message.platform !== "")
            writer.tag(12, runtime_1.WireType.LengthDelimited).string(message.platform);
        /* string device_info = 13; */
        if (message.deviceInfo !== "")
            writer.tag(13, runtime_1.WireType.LengthDelimited).string(message.deviceInfo);
        /* uint32 platform_type = 14; */
        if (message.platformType !== 0)
            writer.tag(14, runtime_1.WireType.Varint).uint32(message.platformType);
        /* bool is_guest = 15; */
        if (message.isGuest !== false)
            writer.tag(15, runtime_1.WireType.Varint).bool(message.isGuest);
        /* uint32 cloud_client_ip = 16; */
        if (message.cloudClientIp !== 0)
            writer.tag(16, runtime_1.WireType.Varint).uint32(message.cloudClientIp);
        /* uint32 gm_uid = 17; */
        if (message.gmUid !== 0)
            writer.tag(17, runtime_1.WireType.Varint).uint32(message.gmUid);
        /* string checksum = 18; */
        if (message.checksum !== "")
            writer.tag(18, runtime_1.WireType.LengthDelimited).string(message.checksum);
        /* string online_id = 19; */
        if (message.onlineId !== "")
            writer.tag(19, runtime_1.WireType.LengthDelimited).string(message.onlineId);
        /* uint32 client_token = 20; */
        if (message.clientToken !== 0)
            writer.tag(20, runtime_1.WireType.Varint).uint32(message.clientToken);
        /* bytes security_cmd_reply = 21; */
        if (message.securityCmdReply.length)
            writer.tag(21, runtime_1.WireType.LengthDelimited).bytes(message.securityCmdReply);
        /* bytes extra_bin_data = 22; */
        if (message.extraBinData.length)
            writer.tag(22, runtime_1.WireType.LengthDelimited).bytes(message.extraBinData);
        /* string cps = 23; */
        if (message.cps !== "")
            writer.tag(23, runtime_1.WireType.LengthDelimited).string(message.cps);
        /* uint32 channel_id = 24; */
        if (message.channelId !== 0)
            writer.tag(24, runtime_1.WireType.Varint).uint32(message.channelId);
        /* uint32 sub_channel_id = 25; */
        if (message.subChannelId !== 0)
            writer.tag(25, runtime_1.WireType.Varint).uint32(message.subChannelId);
        /* string checksum_client_version = 26; */
        if (message.checksumClientVersion !== "")
            writer.tag(26, runtime_1.WireType.LengthDelimited).string(message.checksumClientVersion);
        /* uint32 tag = 27; */
        if (message.tag !== 0)
            writer.tag(27, runtime_1.WireType.Varint).uint32(message.tag);
        /* TrackingIOInfo tracking_io_info = 28; */
        if (message.trackingIoInfo)
            TrackingIOInfo_1.TrackingIOInfo.internalBinaryWrite(message.trackingIoInfo, writer.tag(28, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* string country_code = 29; */
        if (message.countryCode !== "")
            writer.tag(29, runtime_1.WireType.LengthDelimited).string(message.countryCode);
        /* uint32 client_data_version = 30; */
        if (message.clientDataVersion !== 0)
            writer.tag(30, runtime_1.WireType.Varint).uint32(message.clientDataVersion);
        /* bytes environment_error_code = 31; */
        if (message.environmentErrorCode.length)
            writer.tag(31, runtime_1.WireType.LengthDelimited).bytes(message.environmentErrorCode);
        /* uint32 target_home_owner_uid = 32; */
        if (message.targetHomeOwnerUid !== 0)
            writer.tag(32, runtime_1.WireType.Varint).uint32(message.targetHomeOwnerUid);
        /* string psn_id = 33; */
        if (message.psnId !== "")
            writer.tag(33, runtime_1.WireType.LengthDelimited).string(message.psnId);
        /* string client_verison_hash = 34; */
        if (message.clientVerisonHash !== "")
            writer.tag(34, runtime_1.WireType.LengthDelimited).string(message.clientVerisonHash);
        /* bool is_transfer = 35; */
        if (message.isTransfer !== false)
            writer.tag(35, runtime_1.WireType.Varint).bool(message.isTransfer);
        /* uint32 reg_platform = 36; */
        if (message.regPlatform !== 0)
            writer.tag(36, runtime_1.WireType.Varint).uint32(message.regPlatform);
        /* uint32 target_home_param = 37; */
        if (message.targetHomeParam !== 0)
            writer.tag(37, runtime_1.WireType.Varint).uint32(message.targetHomeParam);
        /* AdjustTrackingInfo adjust_tracking_info = 38; */
        if (message.adjustTrackingInfo)
            AdjustTrackingInfo_1.AdjustTrackingInfo.internalBinaryWrite(message.adjustTrackingInfo, writer.tag(38, runtime_1.WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message PlayerLoginReq
 */
exports.PlayerLoginReq = new PlayerLoginReq$Type();

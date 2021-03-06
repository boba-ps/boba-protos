"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetPlayerTokenReq = exports.GetPlayerTokenReq_CmdId = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
/**
 * @generated from protobuf enum GetPlayerTokenReq.CmdId
 */
var GetPlayerTokenReq_CmdId;
(function (GetPlayerTokenReq_CmdId) {
    /**
     * @generated from protobuf enum value: ENET_CHANNEL_ID = 0;
     */
    GetPlayerTokenReq_CmdId[GetPlayerTokenReq_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_CHANNEL_ID = 0;
     */
    GetPlayerTokenReq_CmdId[GetPlayerTokenReq_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    GetPlayerTokenReq_CmdId[GetPlayerTokenReq_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    GetPlayerTokenReq_CmdId[GetPlayerTokenReq_CmdId["IS_ALLOW_CLIENT"] = 1] = "IS_ALLOW_CLIENT";
    /**
     * @generated from protobuf enum value: CMD_ID = 149;
     */
    GetPlayerTokenReq_CmdId[GetPlayerTokenReq_CmdId["CMD_ID"] = 149] = "CMD_ID";
})(GetPlayerTokenReq_CmdId = exports.GetPlayerTokenReq_CmdId || (exports.GetPlayerTokenReq_CmdId = {}));
// @generated message type with reflection information, may provide speed optimized methods
class GetPlayerTokenReq$Type extends runtime_5.MessageType {
    constructor() {
        super("GetPlayerTokenReq", [
            { no: 1, name: "account_type", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 2, name: "account_uid", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 3, name: "account_token", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 4, name: "account_ext", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 5, name: "uid", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 6, name: "is_guest", kind: "scalar", T: 8 /*ScalarType.BOOL*/ },
            { no: 7, name: "platform_type", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 8, name: "cloud_client_ip", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 9, name: "online_id", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 10, name: "psn_region", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 11, name: "channel_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 12, name: "sub_channel_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 13, name: "country_code", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 14, name: "psn_id", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 15, name: "client_ip_str", kind: "scalar", T: 9 /*ScalarType.STRING*/ }
        ]);
    }
    create(value) {
        const message = { accountType: 0, accountUid: "", accountToken: "", accountExt: "", uid: 0, isGuest: false, platformType: 0, cloudClientIp: 0, onlineId: "", psnRegion: "", channelId: 0, subChannelId: 0, countryCode: "", psnId: "", clientIpStr: "" };
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
                case /* uint32 account_type */ 1:
                    message.accountType = reader.uint32();
                    break;
                case /* string account_uid */ 2:
                    message.accountUid = reader.string();
                    break;
                case /* string account_token */ 3:
                    message.accountToken = reader.string();
                    break;
                case /* string account_ext */ 4:
                    message.accountExt = reader.string();
                    break;
                case /* uint32 uid */ 5:
                    message.uid = reader.uint32();
                    break;
                case /* bool is_guest */ 6:
                    message.isGuest = reader.bool();
                    break;
                case /* uint32 platform_type */ 7:
                    message.platformType = reader.uint32();
                    break;
                case /* uint32 cloud_client_ip */ 8:
                    message.cloudClientIp = reader.uint32();
                    break;
                case /* string online_id */ 9:
                    message.onlineId = reader.string();
                    break;
                case /* string psn_region */ 10:
                    message.psnRegion = reader.string();
                    break;
                case /* uint32 channel_id */ 11:
                    message.channelId = reader.uint32();
                    break;
                case /* uint32 sub_channel_id */ 12:
                    message.subChannelId = reader.uint32();
                    break;
                case /* string country_code */ 13:
                    message.countryCode = reader.string();
                    break;
                case /* string psn_id */ 14:
                    message.psnId = reader.string();
                    break;
                case /* string client_ip_str */ 15:
                    message.clientIpStr = reader.string();
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
        /* uint32 account_type = 1; */
        if (message.accountType !== 0)
            writer.tag(1, runtime_1.WireType.Varint).uint32(message.accountType);
        /* string account_uid = 2; */
        if (message.accountUid !== "")
            writer.tag(2, runtime_1.WireType.LengthDelimited).string(message.accountUid);
        /* string account_token = 3; */
        if (message.accountToken !== "")
            writer.tag(3, runtime_1.WireType.LengthDelimited).string(message.accountToken);
        /* string account_ext = 4; */
        if (message.accountExt !== "")
            writer.tag(4, runtime_1.WireType.LengthDelimited).string(message.accountExt);
        /* uint32 uid = 5; */
        if (message.uid !== 0)
            writer.tag(5, runtime_1.WireType.Varint).uint32(message.uid);
        /* bool is_guest = 6; */
        if (message.isGuest !== false)
            writer.tag(6, runtime_1.WireType.Varint).bool(message.isGuest);
        /* uint32 platform_type = 7; */
        if (message.platformType !== 0)
            writer.tag(7, runtime_1.WireType.Varint).uint32(message.platformType);
        /* uint32 cloud_client_ip = 8; */
        if (message.cloudClientIp !== 0)
            writer.tag(8, runtime_1.WireType.Varint).uint32(message.cloudClientIp);
        /* string online_id = 9; */
        if (message.onlineId !== "")
            writer.tag(9, runtime_1.WireType.LengthDelimited).string(message.onlineId);
        /* string psn_region = 10; */
        if (message.psnRegion !== "")
            writer.tag(10, runtime_1.WireType.LengthDelimited).string(message.psnRegion);
        /* uint32 channel_id = 11; */
        if (message.channelId !== 0)
            writer.tag(11, runtime_1.WireType.Varint).uint32(message.channelId);
        /* uint32 sub_channel_id = 12; */
        if (message.subChannelId !== 0)
            writer.tag(12, runtime_1.WireType.Varint).uint32(message.subChannelId);
        /* string country_code = 13; */
        if (message.countryCode !== "")
            writer.tag(13, runtime_1.WireType.LengthDelimited).string(message.countryCode);
        /* string psn_id = 14; */
        if (message.psnId !== "")
            writer.tag(14, runtime_1.WireType.LengthDelimited).string(message.psnId);
        /* string client_ip_str = 15; */
        if (message.clientIpStr !== "")
            writer.tag(15, runtime_1.WireType.LengthDelimited).string(message.clientIpStr);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message GetPlayerTokenReq
 */
exports.GetPlayerTokenReq = new GetPlayerTokenReq$Type();

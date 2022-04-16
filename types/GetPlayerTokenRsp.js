"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetPlayerTokenRsp = exports.GetPlayerTokenRsp_CmdId = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
/**
 * @generated from protobuf enum GetPlayerTokenRsp.CmdId
 */
var GetPlayerTokenRsp_CmdId;
(function (GetPlayerTokenRsp_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    GetPlayerTokenRsp_CmdId[GetPlayerTokenRsp_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    GetPlayerTokenRsp_CmdId[GetPlayerTokenRsp_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    GetPlayerTokenRsp_CmdId[GetPlayerTokenRsp_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
    /**
     * @generated from protobuf enum value: CMD_ID = 118;
     */
    GetPlayerTokenRsp_CmdId[GetPlayerTokenRsp_CmdId["CMD_ID"] = 118] = "CMD_ID";
})(GetPlayerTokenRsp_CmdId = exports.GetPlayerTokenRsp_CmdId || (exports.GetPlayerTokenRsp_CmdId = {}));
// @generated message type with reflection information, may provide speed optimized methods
class GetPlayerTokenRsp$Type extends runtime_5.MessageType {
    constructor() {
        super("GetPlayerTokenRsp", [
            { no: 1, name: "retcode", kind: "scalar", T: 5 /*ScalarType.INT32*/ },
            { no: 2, name: "msg", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 3, name: "uid", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 4, name: "token", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 5, name: "black_uid_end_time", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 6, name: "account_type", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 7, name: "account_uid", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 8, name: "is_proficient_player", kind: "scalar", T: 8 /*ScalarType.BOOL*/ },
            { no: 9, name: "secret_key", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 10, name: "gm_uid", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 11, name: "secret_key_seed", kind: "scalar", T: 4 /*ScalarType.UINT64*/, L: 0 /*LongType.BIGINT*/ },
            { no: 12, name: "security_cmd_buffer", kind: "scalar", T: 12 /*ScalarType.BYTES*/ },
            { no: 13, name: "platform_type", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 14, name: "extra_bin_data", kind: "scalar", T: 12 /*ScalarType.BYTES*/ },
            { no: 15, name: "is_guest", kind: "scalar", T: 8 /*ScalarType.BOOL*/ },
            { no: 16, name: "channel_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 17, name: "sub_channel_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 18, name: "tag", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 19, name: "country_code", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 20, name: "is_login_white_list", kind: "scalar", T: 8 /*ScalarType.BOOL*/ },
            { no: 21, name: "psn_id", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 22, name: "client_version_random_key", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 23, name: "reg_platform", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 24, name: "client_ip_str", kind: "scalar", T: 9 /*ScalarType.STRING*/ }
        ]);
    }
    create(value) {
        const message = { retcode: 0, msg: "", uid: 0, token: "", blackUidEndTime: 0, accountType: 0, accountUid: "", isProficientPlayer: false, secretKey: "", gmUid: 0, secretKeySeed: 0n, securityCmdBuffer: new Uint8Array(0), platformType: 0, extraBinData: new Uint8Array(0), isGuest: false, channelId: 0, subChannelId: 0, tag: 0, countryCode: "", isLoginWhiteList: false, psnId: "", clientVersionRandomKey: "", regPlatform: 0, clientIpStr: "" };
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
                case /* int32 retcode */ 1:
                    message.retcode = reader.int32();
                    break;
                case /* string msg */ 2:
                    message.msg = reader.string();
                    break;
                case /* uint32 uid */ 3:
                    message.uid = reader.uint32();
                    break;
                case /* string token */ 4:
                    message.token = reader.string();
                    break;
                case /* uint32 black_uid_end_time */ 5:
                    message.blackUidEndTime = reader.uint32();
                    break;
                case /* uint32 account_type */ 6:
                    message.accountType = reader.uint32();
                    break;
                case /* string account_uid */ 7:
                    message.accountUid = reader.string();
                    break;
                case /* bool is_proficient_player */ 8:
                    message.isProficientPlayer = reader.bool();
                    break;
                case /* string secret_key */ 9:
                    message.secretKey = reader.string();
                    break;
                case /* uint32 gm_uid */ 10:
                    message.gmUid = reader.uint32();
                    break;
                case /* uint64 secret_key_seed */ 11:
                    message.secretKeySeed = reader.uint64().toBigInt();
                    break;
                case /* bytes security_cmd_buffer */ 12:
                    message.securityCmdBuffer = reader.bytes();
                    break;
                case /* uint32 platform_type */ 13:
                    message.platformType = reader.uint32();
                    break;
                case /* bytes extra_bin_data */ 14:
                    message.extraBinData = reader.bytes();
                    break;
                case /* bool is_guest */ 15:
                    message.isGuest = reader.bool();
                    break;
                case /* uint32 channel_id */ 16:
                    message.channelId = reader.uint32();
                    break;
                case /* uint32 sub_channel_id */ 17:
                    message.subChannelId = reader.uint32();
                    break;
                case /* uint32 tag */ 18:
                    message.tag = reader.uint32();
                    break;
                case /* string country_code */ 19:
                    message.countryCode = reader.string();
                    break;
                case /* bool is_login_white_list */ 20:
                    message.isLoginWhiteList = reader.bool();
                    break;
                case /* string psn_id */ 21:
                    message.psnId = reader.string();
                    break;
                case /* string client_version_random_key */ 22:
                    message.clientVersionRandomKey = reader.string();
                    break;
                case /* uint32 reg_platform */ 23:
                    message.regPlatform = reader.uint32();
                    break;
                case /* string client_ip_str */ 24:
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
        /* int32 retcode = 1; */
        if (message.retcode !== 0)
            writer.tag(1, runtime_1.WireType.Varint).int32(message.retcode);
        /* string msg = 2; */
        if (message.msg !== "")
            writer.tag(2, runtime_1.WireType.LengthDelimited).string(message.msg);
        /* uint32 uid = 3; */
        if (message.uid !== 0)
            writer.tag(3, runtime_1.WireType.Varint).uint32(message.uid);
        /* string token = 4; */
        if (message.token !== "")
            writer.tag(4, runtime_1.WireType.LengthDelimited).string(message.token);
        /* uint32 black_uid_end_time = 5; */
        if (message.blackUidEndTime !== 0)
            writer.tag(5, runtime_1.WireType.Varint).uint32(message.blackUidEndTime);
        /* uint32 account_type = 6; */
        if (message.accountType !== 0)
            writer.tag(6, runtime_1.WireType.Varint).uint32(message.accountType);
        /* string account_uid = 7; */
        if (message.accountUid !== "")
            writer.tag(7, runtime_1.WireType.LengthDelimited).string(message.accountUid);
        /* bool is_proficient_player = 8; */
        if (message.isProficientPlayer !== false)
            writer.tag(8, runtime_1.WireType.Varint).bool(message.isProficientPlayer);
        /* string secret_key = 9; */
        if (message.secretKey !== "")
            writer.tag(9, runtime_1.WireType.LengthDelimited).string(message.secretKey);
        /* uint32 gm_uid = 10; */
        if (message.gmUid !== 0)
            writer.tag(10, runtime_1.WireType.Varint).uint32(message.gmUid);
        /* uint64 secret_key_seed = 11; */
        if (message.secretKeySeed !== 0n)
            writer.tag(11, runtime_1.WireType.Varint).uint64(message.secretKeySeed);
        /* bytes security_cmd_buffer = 12; */
        if (message.securityCmdBuffer.length)
            writer.tag(12, runtime_1.WireType.LengthDelimited).bytes(message.securityCmdBuffer);
        /* uint32 platform_type = 13; */
        if (message.platformType !== 0)
            writer.tag(13, runtime_1.WireType.Varint).uint32(message.platformType);
        /* bytes extra_bin_data = 14; */
        if (message.extraBinData.length)
            writer.tag(14, runtime_1.WireType.LengthDelimited).bytes(message.extraBinData);
        /* bool is_guest = 15; */
        if (message.isGuest !== false)
            writer.tag(15, runtime_1.WireType.Varint).bool(message.isGuest);
        /* uint32 channel_id = 16; */
        if (message.channelId !== 0)
            writer.tag(16, runtime_1.WireType.Varint).uint32(message.channelId);
        /* uint32 sub_channel_id = 17; */
        if (message.subChannelId !== 0)
            writer.tag(17, runtime_1.WireType.Varint).uint32(message.subChannelId);
        /* uint32 tag = 18; */
        if (message.tag !== 0)
            writer.tag(18, runtime_1.WireType.Varint).uint32(message.tag);
        /* string country_code = 19; */
        if (message.countryCode !== "")
            writer.tag(19, runtime_1.WireType.LengthDelimited).string(message.countryCode);
        /* bool is_login_white_list = 20; */
        if (message.isLoginWhiteList !== false)
            writer.tag(20, runtime_1.WireType.Varint).bool(message.isLoginWhiteList);
        /* string psn_id = 21; */
        if (message.psnId !== "")
            writer.tag(21, runtime_1.WireType.LengthDelimited).string(message.psnId);
        /* string client_version_random_key = 22; */
        if (message.clientVersionRandomKey !== "")
            writer.tag(22, runtime_1.WireType.LengthDelimited).string(message.clientVersionRandomKey);
        /* uint32 reg_platform = 23; */
        if (message.regPlatform !== 0)
            writer.tag(23, runtime_1.WireType.Varint).uint32(message.regPlatform);
        /* string client_ip_str = 24; */
        if (message.clientIpStr !== "")
            writer.tag(24, runtime_1.WireType.LengthDelimited).string(message.clientIpStr);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message GetPlayerTokenRsp
 */
exports.GetPlayerTokenRsp = new GetPlayerTokenRsp$Type();

// @generated by protobuf-ts 2.4.0 with parameter generate_dependencies,output_typescript,// @generated from protobuf file "PlayerLoginReq.proto" (syntax proto3),// tslint:disable
import type { BinaryWriteOptions } from "@protobuf-ts/runtime";
import type { IBinaryWriter } from "@protobuf-ts/runtime";
import { WireType } from "@protobuf-ts/runtime";
import type { BinaryReadOptions } from "@protobuf-ts/runtime";
import type { IBinaryReader } from "@protobuf-ts/runtime";
import { UnknownFieldHandler } from "@protobuf-ts/runtime";
import type { PartialMessage } from "@protobuf-ts/runtime";
import { reflectionMergePartial } from "@protobuf-ts/runtime";
import { MESSAGE_TYPE } from "@protobuf-ts/runtime";
import { MessageType } from "@protobuf-ts/runtime";
import { AdjustTrackingInfo } from "./AdjustTrackingInfo";
import { TrackingIOInfo } from "./TrackingIOInfo";
/**
 * @generated from protobuf message PlayerLoginReq
 */
export interface PlayerLoginReq {
    /**
     * @generated from protobuf field: string token = 1;
     */
    token: string;
    /**
     * @generated from protobuf field: string client_version = 2;
     */
    clientVersion: string;
    /**
     * @generated from protobuf field: string system_version = 3;
     */
    systemVersion: string;
    /**
     * @generated from protobuf field: string device_name = 4;
     */
    deviceName: string;
    /**
     * @generated from protobuf field: string device_uuid = 5;
     */
    deviceUuid: string;
    /**
     * @generated from protobuf field: uint32 target_uid = 6;
     */
    targetUid: number;
    /**
     * @generated from protobuf field: uint64 login_rand = 7;
     */
    loginRand: bigint;
    /**
     * @generated from protobuf field: bool is_editor = 8;
     */
    isEditor: boolean;
    /**
     * @generated from protobuf field: uint32 language_type = 9;
     */
    languageType: number;
    /**
     * @generated from protobuf field: uint32 account_type = 10;
     */
    accountType: number;
    /**
     * @generated from protobuf field: string account_uid = 11;
     */
    accountUid: string;
    /**
     * @generated from protobuf field: string platform = 12;
     */
    platform: string;
    /**
     * @generated from protobuf field: string device_info = 13;
     */
    deviceInfo: string;
    /**
     * @generated from protobuf field: uint32 platform_type = 14;
     */
    platformType: number;
    /**
     * @generated from protobuf field: bool is_guest = 15;
     */
    isGuest: boolean;
    /**
     * @generated from protobuf field: uint32 cloud_client_ip = 16;
     */
    cloudClientIp: number;
    /**
     * @generated from protobuf field: uint32 gm_uid = 17;
     */
    gmUid: number;
    /**
     * @generated from protobuf field: string checksum = 18;
     */
    checksum: string;
    /**
     * @generated from protobuf field: string online_id = 19;
     */
    onlineId: string;
    /**
     * @generated from protobuf field: uint32 client_token = 20;
     */
    clientToken: number;
    /**
     * @generated from protobuf field: bytes security_cmd_reply = 21;
     */
    securityCmdReply: Uint8Array;
    /**
     * @generated from protobuf field: bytes extra_bin_data = 22;
     */
    extraBinData: Uint8Array;
    /**
     * @generated from protobuf field: string cps = 23;
     */
    cps: string;
    /**
     * @generated from protobuf field: uint32 channel_id = 24;
     */
    channelId: number;
    /**
     * @generated from protobuf field: uint32 sub_channel_id = 25;
     */
    subChannelId: number;
    /**
     * @generated from protobuf field: string checksum_client_version = 26;
     */
    checksumClientVersion: string;
    /**
     * @generated from protobuf field: uint32 tag = 27;
     */
    tag: number;
    /**
     * @generated from protobuf field: TrackingIOInfo tracking_io_info = 28;
     */
    trackingIoInfo?: TrackingIOInfo;
    /**
     * @generated from protobuf field: string country_code = 29;
     */
    countryCode: string;
    /**
     * @generated from protobuf field: uint32 client_data_version = 30;
     */
    clientDataVersion: number;
    /**
     * @generated from protobuf field: bytes environment_error_code = 31;
     */
    environmentErrorCode: Uint8Array;
    /**
     * @generated from protobuf field: uint32 target_home_owner_uid = 32;
     */
    targetHomeOwnerUid: number;
    /**
     * @generated from protobuf field: string psn_id = 33;
     */
    psnId: string;
    /**
     * @generated from protobuf field: string client_verison_hash = 34;
     */
    clientVerisonHash: string;
    /**
     * @generated from protobuf field: bool is_transfer = 35;
     */
    isTransfer: boolean;
    /**
     * @generated from protobuf field: uint32 reg_platform = 36;
     */
    regPlatform: number;
    /**
     * @generated from protobuf field: uint32 target_home_param = 37;
     */
    targetHomeParam: number;
    /**
     * @generated from protobuf field: AdjustTrackingInfo adjust_tracking_info = 38;
     */
    adjustTrackingInfo?: AdjustTrackingInfo;
}
/**
 * @generated from protobuf enum PlayerLoginReq.CmdId
 */
export enum PlayerLoginReq_CmdId {
    /**
     * @generated from protobuf enum value: ENET_CHANNEL_ID = 0;
     */
    ENET_CHANNEL_ID = 0,
    /**
     * @generated from protobuf enum value: ENET_CHANNEL_ID = 0;
     */
    NONE = 0,
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    ENET_IS_RELIABLE = 1,
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    IS_ALLOW_CLIENT = 1,
    /**
     * @generated from protobuf enum value: CMD_ID = 189;
     */
    CMD_ID = 189
}
// @generated message type with reflection information, may provide speed optimized methods
class PlayerLoginReq$Type extends MessageType<PlayerLoginReq> {
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
            { no: 28, name: "tracking_io_info", kind: "message", T: () => TrackingIOInfo },
            { no: 29, name: "country_code", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 30, name: "client_data_version", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 31, name: "environment_error_code", kind: "scalar", T: 12 /*ScalarType.BYTES*/ },
            { no: 32, name: "target_home_owner_uid", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 33, name: "psn_id", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 34, name: "client_verison_hash", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 35, name: "is_transfer", kind: "scalar", T: 8 /*ScalarType.BOOL*/ },
            { no: 36, name: "reg_platform", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 37, name: "target_home_param", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 38, name: "adjust_tracking_info", kind: "message", T: () => AdjustTrackingInfo }
        ]);
    }
    create(value?: PartialMessage<PlayerLoginReq>): PlayerLoginReq {
        const message = { token: "", clientVersion: "", systemVersion: "", deviceName: "", deviceUuid: "", targetUid: 0, loginRand: 0n, isEditor: false, languageType: 0, accountType: 0, accountUid: "", platform: "", deviceInfo: "", platformType: 0, isGuest: false, cloudClientIp: 0, gmUid: 0, checksum: "", onlineId: "", clientToken: 0, securityCmdReply: new Uint8Array(0), extraBinData: new Uint8Array(0), cps: "", channelId: 0, subChannelId: 0, checksumClientVersion: "", tag: 0, countryCode: "", clientDataVersion: 0, environmentErrorCode: new Uint8Array(0), targetHomeOwnerUid: 0, psnId: "", clientVerisonHash: "", isTransfer: false, regPlatform: 0, targetHomeParam: 0 };
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<PlayerLoginReq>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: PlayerLoginReq): PlayerLoginReq {
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
                    message.trackingIoInfo = TrackingIOInfo.internalBinaryRead(reader, reader.uint32(), options, message.trackingIoInfo);
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
                    message.adjustTrackingInfo = AdjustTrackingInfo.internalBinaryRead(reader, reader.uint32(), options, message.adjustTrackingInfo);
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message: PlayerLoginReq, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* string token = 1; */
        if (message.token !== "")
            writer.tag(1, WireType.LengthDelimited).string(message.token);
        /* string client_version = 2; */
        if (message.clientVersion !== "")
            writer.tag(2, WireType.LengthDelimited).string(message.clientVersion);
        /* string system_version = 3; */
        if (message.systemVersion !== "")
            writer.tag(3, WireType.LengthDelimited).string(message.systemVersion);
        /* string device_name = 4; */
        if (message.deviceName !== "")
            writer.tag(4, WireType.LengthDelimited).string(message.deviceName);
        /* string device_uuid = 5; */
        if (message.deviceUuid !== "")
            writer.tag(5, WireType.LengthDelimited).string(message.deviceUuid);
        /* uint32 target_uid = 6; */
        if (message.targetUid !== 0)
            writer.tag(6, WireType.Varint).uint32(message.targetUid);
        /* uint64 login_rand = 7; */
        if (message.loginRand !== 0n)
            writer.tag(7, WireType.Varint).uint64(message.loginRand);
        /* bool is_editor = 8; */
        if (message.isEditor !== false)
            writer.tag(8, WireType.Varint).bool(message.isEditor);
        /* uint32 language_type = 9; */
        if (message.languageType !== 0)
            writer.tag(9, WireType.Varint).uint32(message.languageType);
        /* uint32 account_type = 10; */
        if (message.accountType !== 0)
            writer.tag(10, WireType.Varint).uint32(message.accountType);
        /* string account_uid = 11; */
        if (message.accountUid !== "")
            writer.tag(11, WireType.LengthDelimited).string(message.accountUid);
        /* string platform = 12; */
        if (message.platform !== "")
            writer.tag(12, WireType.LengthDelimited).string(message.platform);
        /* string device_info = 13; */
        if (message.deviceInfo !== "")
            writer.tag(13, WireType.LengthDelimited).string(message.deviceInfo);
        /* uint32 platform_type = 14; */
        if (message.platformType !== 0)
            writer.tag(14, WireType.Varint).uint32(message.platformType);
        /* bool is_guest = 15; */
        if (message.isGuest !== false)
            writer.tag(15, WireType.Varint).bool(message.isGuest);
        /* uint32 cloud_client_ip = 16; */
        if (message.cloudClientIp !== 0)
            writer.tag(16, WireType.Varint).uint32(message.cloudClientIp);
        /* uint32 gm_uid = 17; */
        if (message.gmUid !== 0)
            writer.tag(17, WireType.Varint).uint32(message.gmUid);
        /* string checksum = 18; */
        if (message.checksum !== "")
            writer.tag(18, WireType.LengthDelimited).string(message.checksum);
        /* string online_id = 19; */
        if (message.onlineId !== "")
            writer.tag(19, WireType.LengthDelimited).string(message.onlineId);
        /* uint32 client_token = 20; */
        if (message.clientToken !== 0)
            writer.tag(20, WireType.Varint).uint32(message.clientToken);
        /* bytes security_cmd_reply = 21; */
        if (message.securityCmdReply.length)
            writer.tag(21, WireType.LengthDelimited).bytes(message.securityCmdReply);
        /* bytes extra_bin_data = 22; */
        if (message.extraBinData.length)
            writer.tag(22, WireType.LengthDelimited).bytes(message.extraBinData);
        /* string cps = 23; */
        if (message.cps !== "")
            writer.tag(23, WireType.LengthDelimited).string(message.cps);
        /* uint32 channel_id = 24; */
        if (message.channelId !== 0)
            writer.tag(24, WireType.Varint).uint32(message.channelId);
        /* uint32 sub_channel_id = 25; */
        if (message.subChannelId !== 0)
            writer.tag(25, WireType.Varint).uint32(message.subChannelId);
        /* string checksum_client_version = 26; */
        if (message.checksumClientVersion !== "")
            writer.tag(26, WireType.LengthDelimited).string(message.checksumClientVersion);
        /* uint32 tag = 27; */
        if (message.tag !== 0)
            writer.tag(27, WireType.Varint).uint32(message.tag);
        /* TrackingIOInfo tracking_io_info = 28; */
        if (message.trackingIoInfo)
            TrackingIOInfo.internalBinaryWrite(message.trackingIoInfo, writer.tag(28, WireType.LengthDelimited).fork(), options).join();
        /* string country_code = 29; */
        if (message.countryCode !== "")
            writer.tag(29, WireType.LengthDelimited).string(message.countryCode);
        /* uint32 client_data_version = 30; */
        if (message.clientDataVersion !== 0)
            writer.tag(30, WireType.Varint).uint32(message.clientDataVersion);
        /* bytes environment_error_code = 31; */
        if (message.environmentErrorCode.length)
            writer.tag(31, WireType.LengthDelimited).bytes(message.environmentErrorCode);
        /* uint32 target_home_owner_uid = 32; */
        if (message.targetHomeOwnerUid !== 0)
            writer.tag(32, WireType.Varint).uint32(message.targetHomeOwnerUid);
        /* string psn_id = 33; */
        if (message.psnId !== "")
            writer.tag(33, WireType.LengthDelimited).string(message.psnId);
        /* string client_verison_hash = 34; */
        if (message.clientVerisonHash !== "")
            writer.tag(34, WireType.LengthDelimited).string(message.clientVerisonHash);
        /* bool is_transfer = 35; */
        if (message.isTransfer !== false)
            writer.tag(35, WireType.Varint).bool(message.isTransfer);
        /* uint32 reg_platform = 36; */
        if (message.regPlatform !== 0)
            writer.tag(36, WireType.Varint).uint32(message.regPlatform);
        /* uint32 target_home_param = 37; */
        if (message.targetHomeParam !== 0)
            writer.tag(37, WireType.Varint).uint32(message.targetHomeParam);
        /* AdjustTrackingInfo adjust_tracking_info = 38; */
        if (message.adjustTrackingInfo)
            AdjustTrackingInfo.internalBinaryWrite(message.adjustTrackingInfo, writer.tag(38, WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message PlayerLoginReq
 */
export const PlayerLoginReq = new PlayerLoginReq$Type();

// @generated by protobuf-ts 2.4.0 with parameter generate_dependencies,output_typescript,// @generated from protobuf file "GetPlayerTokenReq.proto" (syntax proto3),// tslint:disable
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
/**
 * @generated from protobuf message GetPlayerTokenReq
 */
export interface GetPlayerTokenReq {
    /**
     * @generated from protobuf field: uint32 account_type = 1;
     */
    accountType: number;
    /**
     * @generated from protobuf field: string account_uid = 2;
     */
    accountUid: string;
    /**
     * @generated from protobuf field: string account_token = 3;
     */
    accountToken: string;
    /**
     * @generated from protobuf field: string account_ext = 4;
     */
    accountExt: string;
    /**
     * @generated from protobuf field: uint32 uid = 5;
     */
    uid: number;
    /**
     * @generated from protobuf field: bool is_guest = 6;
     */
    isGuest: boolean;
    /**
     * @generated from protobuf field: uint32 platform_type = 7;
     */
    platformType: number;
    /**
     * @generated from protobuf field: uint32 cloud_client_ip = 8;
     */
    cloudClientIp: number;
    /**
     * @generated from protobuf field: string online_id = 9;
     */
    onlineId: string;
    /**
     * @generated from protobuf field: string psn_region = 10;
     */
    psnRegion: string;
    /**
     * @generated from protobuf field: uint32 channel_id = 11;
     */
    channelId: number;
    /**
     * @generated from protobuf field: uint32 sub_channel_id = 12;
     */
    subChannelId: number;
    /**
     * @generated from protobuf field: string country_code = 13;
     */
    countryCode: string;
    /**
     * @generated from protobuf field: string psn_id = 14;
     */
    psnId: string;
    /**
     * @generated from protobuf field: string client_ip_str = 15;
     */
    clientIpStr: string;
}
/**
 * @generated from protobuf enum GetPlayerTokenReq.CmdId
 */
export enum GetPlayerTokenReq_CmdId {
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
     * @generated from protobuf enum value: CMD_ID = 149;
     */
    CMD_ID = 149
}
// @generated message type with reflection information, may provide speed optimized methods
class GetPlayerTokenReq$Type extends MessageType<GetPlayerTokenReq> {
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
    create(value?: PartialMessage<GetPlayerTokenReq>): GetPlayerTokenReq {
        const message = { accountType: 0, accountUid: "", accountToken: "", accountExt: "", uid: 0, isGuest: false, platformType: 0, cloudClientIp: 0, onlineId: "", psnRegion: "", channelId: 0, subChannelId: 0, countryCode: "", psnId: "", clientIpStr: "" };
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<GetPlayerTokenReq>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: GetPlayerTokenReq): GetPlayerTokenReq {
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
                        (u === true ? UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message: GetPlayerTokenReq, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* uint32 account_type = 1; */
        if (message.accountType !== 0)
            writer.tag(1, WireType.Varint).uint32(message.accountType);
        /* string account_uid = 2; */
        if (message.accountUid !== "")
            writer.tag(2, WireType.LengthDelimited).string(message.accountUid);
        /* string account_token = 3; */
        if (message.accountToken !== "")
            writer.tag(3, WireType.LengthDelimited).string(message.accountToken);
        /* string account_ext = 4; */
        if (message.accountExt !== "")
            writer.tag(4, WireType.LengthDelimited).string(message.accountExt);
        /* uint32 uid = 5; */
        if (message.uid !== 0)
            writer.tag(5, WireType.Varint).uint32(message.uid);
        /* bool is_guest = 6; */
        if (message.isGuest !== false)
            writer.tag(6, WireType.Varint).bool(message.isGuest);
        /* uint32 platform_type = 7; */
        if (message.platformType !== 0)
            writer.tag(7, WireType.Varint).uint32(message.platformType);
        /* uint32 cloud_client_ip = 8; */
        if (message.cloudClientIp !== 0)
            writer.tag(8, WireType.Varint).uint32(message.cloudClientIp);
        /* string online_id = 9; */
        if (message.onlineId !== "")
            writer.tag(9, WireType.LengthDelimited).string(message.onlineId);
        /* string psn_region = 10; */
        if (message.psnRegion !== "")
            writer.tag(10, WireType.LengthDelimited).string(message.psnRegion);
        /* uint32 channel_id = 11; */
        if (message.channelId !== 0)
            writer.tag(11, WireType.Varint).uint32(message.channelId);
        /* uint32 sub_channel_id = 12; */
        if (message.subChannelId !== 0)
            writer.tag(12, WireType.Varint).uint32(message.subChannelId);
        /* string country_code = 13; */
        if (message.countryCode !== "")
            writer.tag(13, WireType.LengthDelimited).string(message.countryCode);
        /* string psn_id = 14; */
        if (message.psnId !== "")
            writer.tag(14, WireType.LengthDelimited).string(message.psnId);
        /* string client_ip_str = 15; */
        if (message.clientIpStr !== "")
            writer.tag(15, WireType.LengthDelimited).string(message.clientIpStr);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message GetPlayerTokenReq
 */
export const GetPlayerTokenReq = new GetPlayerTokenReq$Type();

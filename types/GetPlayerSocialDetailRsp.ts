// @generated by protobuf-ts 2.4.0 with parameter generate_dependencies,output_typescript,// @generated from protobuf file "GetPlayerSocialDetailRsp.proto" (syntax proto3),// tslint:disable
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
import { SocialDetail } from "./SocialDetail";
/**
 * @generated from protobuf message GetPlayerSocialDetailRsp
 */
export interface GetPlayerSocialDetailRsp {
    /**
     * @generated from protobuf field: int32 retcode = 1;
     */
    retcode: number;
    /**
     * @generated from protobuf field: SocialDetail detail_data = 2;
     */
    detailData?: SocialDetail;
}
/**
 * @generated from protobuf enum GetPlayerSocialDetailRsp.CmdId
 */
export enum GetPlayerSocialDetailRsp_CmdId {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    NONE = 0,
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    ENET_CHANNEL_ID = 0,
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    ENET_IS_RELIABLE = 1,
    /**
     * @generated from protobuf enum value: CMD_ID = 4079;
     */
    CMD_ID = 4079
}
// @generated message type with reflection information, may provide speed optimized methods
class GetPlayerSocialDetailRsp$Type extends MessageType<GetPlayerSocialDetailRsp> {
    constructor() {
        super("GetPlayerSocialDetailRsp", [
            { no: 1, name: "retcode", kind: "scalar", T: 5 /*ScalarType.INT32*/ },
            { no: 2, name: "detail_data", kind: "message", T: () => SocialDetail }
        ]);
    }
    create(value?: PartialMessage<GetPlayerSocialDetailRsp>): GetPlayerSocialDetailRsp {
        const message = { retcode: 0 };
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<GetPlayerSocialDetailRsp>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: GetPlayerSocialDetailRsp): GetPlayerSocialDetailRsp {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* int32 retcode */ 1:
                    message.retcode = reader.int32();
                    break;
                case /* SocialDetail detail_data */ 2:
                    message.detailData = SocialDetail.internalBinaryRead(reader, reader.uint32(), options, message.detailData);
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
    internalBinaryWrite(message: GetPlayerSocialDetailRsp, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* int32 retcode = 1; */
        if (message.retcode !== 0)
            writer.tag(1, WireType.Varint).int32(message.retcode);
        /* SocialDetail detail_data = 2; */
        if (message.detailData)
            SocialDetail.internalBinaryWrite(message.detailData, writer.tag(2, WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message GetPlayerSocialDetailRsp
 */
export const GetPlayerSocialDetailRsp = new GetPlayerSocialDetailRsp$Type();

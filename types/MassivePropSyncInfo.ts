// @generated by protobuf-ts 2.4.0 with parameter generate_dependencies,output_typescript,// @generated from protobuf file "MassivePropSyncInfo.proto" (syntax proto3),// tslint:disable
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
import { MassivePropParam } from "./MassivePropParam";
/**
 * @generated from protobuf message MassivePropSyncInfo
 */
export interface MassivePropSyncInfo {
    /**
     * @generated from protobuf field: int64 id = 1;
     */
    id: bigint;
    /**
     * @generated from protobuf field: repeated MassivePropParam prop_list = 2;
     */
    propList: MassivePropParam[];
}
// @generated message type with reflection information, may provide speed optimized methods
class MassivePropSyncInfo$Type extends MessageType<MassivePropSyncInfo> {
    constructor() {
        super("MassivePropSyncInfo", [
            { no: 1, name: "id", kind: "scalar", T: 3 /*ScalarType.INT64*/, L: 0 /*LongType.BIGINT*/ },
            { no: 2, name: "prop_list", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => MassivePropParam }
        ]);
    }
    create(value?: PartialMessage<MassivePropSyncInfo>): MassivePropSyncInfo {
        const message = { id: 0n, propList: [] };
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<MassivePropSyncInfo>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: MassivePropSyncInfo): MassivePropSyncInfo {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* int64 id */ 1:
                    message.id = reader.int64().toBigInt();
                    break;
                case /* repeated MassivePropParam prop_list */ 2:
                    message.propList.push(MassivePropParam.internalBinaryRead(reader, reader.uint32(), options));
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
    internalBinaryWrite(message: MassivePropSyncInfo, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* int64 id = 1; */
        if (message.id !== 0n)
            writer.tag(1, WireType.Varint).int64(message.id);
        /* repeated MassivePropParam prop_list = 2; */
        for (let i = 0; i < message.propList.length; i++)
            MassivePropParam.internalBinaryWrite(message.propList[i], writer.tag(2, WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message MassivePropSyncInfo
 */
export const MassivePropSyncInfo = new MassivePropSyncInfo$Type();

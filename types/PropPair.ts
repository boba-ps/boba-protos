// @generated by protobuf-ts 2.4.0 with parameter generate_dependencies,output_typescript,// @generated from protobuf file "PropPair.proto" (syntax proto3),// tslint:disable
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
import { PropValue } from "./PropValue";
/**
 * @generated from protobuf message PropPair
 */
export interface PropPair {
    /**
     * @generated from protobuf field: uint32 type = 1;
     */
    type: number;
    /**
     * @generated from protobuf field: PropValue prop_value = 2;
     */
    propValue?: PropValue;
}
// @generated message type with reflection information, may provide speed optimized methods
class PropPair$Type extends MessageType<PropPair> {
    constructor() {
        super("PropPair", [
            { no: 1, name: "type", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 2, name: "prop_value", kind: "message", T: () => PropValue }
        ]);
    }
    create(value?: PartialMessage<PropPair>): PropPair {
        const message = { type: 0 };
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<PropPair>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: PropPair): PropPair {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* uint32 type */ 1:
                    message.type = reader.uint32();
                    break;
                case /* PropValue prop_value */ 2:
                    message.propValue = PropValue.internalBinaryRead(reader, reader.uint32(), options, message.propValue);
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
    internalBinaryWrite(message: PropPair, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* uint32 type = 1; */
        if (message.type !== 0)
            writer.tag(1, WireType.Varint).uint32(message.type);
        /* PropValue prop_value = 2; */
        if (message.propValue)
            PropValue.internalBinaryWrite(message.propValue, writer.tag(2, WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message PropPair
 */
export const PropPair = new PropPair$Type();

// @generated by protobuf-ts 2.4.0 with parameter generate_dependencies,output_typescript,// @generated from protobuf file "SceneFishInfo.proto" (syntax proto3),// tslint:disable
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
import { Vector } from "./Vector";
/**
 * @generated from protobuf message SceneFishInfo
 */
export interface SceneFishInfo {
    /**
     * @generated from protobuf field: uint32 fish_id = 1;
     */
    fishId: number;
    /**
     * @generated from protobuf field: uint32 fish_pool_entity_id = 2;
     */
    fishPoolEntityId: number;
    /**
     * @generated from protobuf field: Vector fish_pool_pos = 3;
     */
    fishPoolPos?: Vector;
    /**
     * @generated from protobuf field: uint32 fish_pool_gadget_id = 4;
     */
    fishPoolGadgetId: number;
}
// @generated message type with reflection information, may provide speed optimized methods
class SceneFishInfo$Type extends MessageType<SceneFishInfo> {
    constructor() {
        super("SceneFishInfo", [
            { no: 1, name: "fish_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 2, name: "fish_pool_entity_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 3, name: "fish_pool_pos", kind: "message", T: () => Vector },
            { no: 4, name: "fish_pool_gadget_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value?: PartialMessage<SceneFishInfo>): SceneFishInfo {
        const message = { fishId: 0, fishPoolEntityId: 0, fishPoolGadgetId: 0 };
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<SceneFishInfo>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: SceneFishInfo): SceneFishInfo {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* uint32 fish_id */ 1:
                    message.fishId = reader.uint32();
                    break;
                case /* uint32 fish_pool_entity_id */ 2:
                    message.fishPoolEntityId = reader.uint32();
                    break;
                case /* Vector fish_pool_pos */ 3:
                    message.fishPoolPos = Vector.internalBinaryRead(reader, reader.uint32(), options, message.fishPoolPos);
                    break;
                case /* uint32 fish_pool_gadget_id */ 4:
                    message.fishPoolGadgetId = reader.uint32();
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
    internalBinaryWrite(message: SceneFishInfo, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* uint32 fish_id = 1; */
        if (message.fishId !== 0)
            writer.tag(1, WireType.Varint).uint32(message.fishId);
        /* uint32 fish_pool_entity_id = 2; */
        if (message.fishPoolEntityId !== 0)
            writer.tag(2, WireType.Varint).uint32(message.fishPoolEntityId);
        /* Vector fish_pool_pos = 3; */
        if (message.fishPoolPos)
            Vector.internalBinaryWrite(message.fishPoolPos, writer.tag(3, WireType.LengthDelimited).fork(), options).join();
        /* uint32 fish_pool_gadget_id = 4; */
        if (message.fishPoolGadgetId !== 0)
            writer.tag(4, WireType.Varint).uint32(message.fishPoolGadgetId);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message SceneFishInfo
 */
export const SceneFishInfo = new SceneFishInfo$Type();

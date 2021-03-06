// @generated by protobuf-ts 2.4.0 with parameter generate_dependencies,output_typescript,// @generated from protobuf file "ShortAbilityHashPair.proto" (syntax proto3),// tslint:disable
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
 * @generated from protobuf message ShortAbilityHashPair
 */
export interface ShortAbilityHashPair {
    /**
     * @generated from protobuf field: int32 ability_name_hash = 1;
     */
    abilityNameHash: number;
    /**
     * @generated from protobuf field: int32 ability_config_hash = 2;
     */
    abilityConfigHash: number;
}
// @generated message type with reflection information, may provide speed optimized methods
class ShortAbilityHashPair$Type extends MessageType<ShortAbilityHashPair> {
    constructor() {
        super("ShortAbilityHashPair", [
            { no: 1, name: "ability_name_hash", kind: "scalar", T: 5 /*ScalarType.INT32*/ },
            { no: 2, name: "ability_config_hash", kind: "scalar", T: 5 /*ScalarType.INT32*/ }
        ]);
    }
    create(value?: PartialMessage<ShortAbilityHashPair>): ShortAbilityHashPair {
        const message = { abilityNameHash: 0, abilityConfigHash: 0 };
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<ShortAbilityHashPair>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: ShortAbilityHashPair): ShortAbilityHashPair {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* int32 ability_name_hash */ 1:
                    message.abilityNameHash = reader.int32();
                    break;
                case /* int32 ability_config_hash */ 2:
                    message.abilityConfigHash = reader.int32();
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
    internalBinaryWrite(message: ShortAbilityHashPair, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* int32 ability_name_hash = 1; */
        if (message.abilityNameHash !== 0)
            writer.tag(1, WireType.Varint).int32(message.abilityNameHash);
        /* int32 ability_config_hash = 2; */
        if (message.abilityConfigHash !== 0)
            writer.tag(2, WireType.Varint).int32(message.abilityConfigHash);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message ShortAbilityHashPair
 */
export const ShortAbilityHashPair = new ShortAbilityHashPair$Type();

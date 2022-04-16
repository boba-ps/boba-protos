"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MassivePropSyncInfo = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
const MassivePropParam_1 = require("./MassivePropParam");
// @generated message type with reflection information, may provide speed optimized methods
class MassivePropSyncInfo$Type extends runtime_5.MessageType {
    constructor() {
        super("MassivePropSyncInfo", [
            { no: 1, name: "id", kind: "scalar", T: 3 /*ScalarType.INT64*/, L: 0 /*LongType.BIGINT*/ },
            { no: 2, name: "prop_list", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => MassivePropParam_1.MassivePropParam }
        ]);
    }
    create(value) {
        const message = { id: 0n, propList: [] };
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
                case /* int64 id */ 1:
                    message.id = reader.int64().toBigInt();
                    break;
                case /* repeated MassivePropParam prop_list */ 2:
                    message.propList.push(MassivePropParam_1.MassivePropParam.internalBinaryRead(reader, reader.uint32(), options));
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
        /* int64 id = 1; */
        if (message.id !== 0n)
            writer.tag(1, runtime_1.WireType.Varint).int64(message.id);
        /* repeated MassivePropParam prop_list = 2; */
        for (let i = 0; i < message.propList.length; i++)
            MassivePropParam_1.MassivePropParam.internalBinaryWrite(message.propList[i], writer.tag(2, runtime_1.WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message MassivePropSyncInfo
 */
exports.MassivePropSyncInfo = new MassivePropSyncInfo$Type();

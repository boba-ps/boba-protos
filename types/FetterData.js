"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FetterData = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
// @generated message type with reflection information, may provide speed optimized methods
class FetterData$Type extends runtime_5.MessageType {
    constructor() {
        super("FetterData", [
            { no: 1, name: "fetter_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 2, name: "fetter_state", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 3, name: "cond_index_list", kind: "scalar", repeat: 1 /*RepeatType.PACKED*/, T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = { fetterId: 0, fetterState: 0, condIndexList: [] };
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
                case /* uint32 fetter_id */ 1:
                    message.fetterId = reader.uint32();
                    break;
                case /* uint32 fetter_state */ 2:
                    message.fetterState = reader.uint32();
                    break;
                case /* repeated uint32 cond_index_list */ 3:
                    if (wireType === runtime_2.WireType.LengthDelimited)
                        for (let e = reader.int32() + reader.pos; reader.pos < e;)
                            message.condIndexList.push(reader.uint32());
                    else
                        message.condIndexList.push(reader.uint32());
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? runtime_1.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message, writer, options) {
        /* uint32 fetter_id = 1; */
        if (message.fetterId !== 0)
            writer.tag(1, runtime_2.WireType.Varint).uint32(message.fetterId);
        /* uint32 fetter_state = 2; */
        if (message.fetterState !== 0)
            writer.tag(2, runtime_2.WireType.Varint).uint32(message.fetterState);
        /* repeated uint32 cond_index_list = 3; */
        if (message.condIndexList.length) {
            writer.tag(3, runtime_2.WireType.LengthDelimited).fork();
            for (let i = 0; i < message.condIndexList.length; i++)
                writer.uint32(message.condIndexList[i]);
            writer.join();
        }
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_1.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message FetterData
 */
exports.FetterData = new FetterData$Type();

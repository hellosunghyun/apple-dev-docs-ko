---
source_path: "documentation/Accelerate/bnnsarithmeticbinary.md"
upstream_sha: "8a29a1d75e67151b588206d3e921a4ff212726be"
translation_status: machine_translated
official_url: "https://developer.apple.com/documentation/accelerate/bnnsarithmeticbinary"
official: false
---

> 비공식 번역입니다. 정확한 최신 내용은 원문을 확인하세요.

# <span class="ko-segment" data-segment-id="seg:heading:bnnsarithmeticbinary:0000:0001">BNNSArithmeticBinary</span>

<span class="ko-segment" data-segment-id="seg:paragraph:bnnsarithmeticbinary:0001:0001">**Framework**: Accelerate **Kind**: struct</span>

<span class="ko-segment" data-segment-id="seg:paragraph:bnnsarithmeticbinary:0002:0001">A structure that contains the inputs and output of an arithmetic operation with two inputs.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:bnnsarithmeticbinary:0003:0001">**Availability**:</span>

- <span class="ko-segment" data-segment-id="seg:list:bnnsarithmeticbinary:0004:0001">iOS 14.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:bnnsarithmeticbinary:0004:0002">iPadOS 14.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:bnnsarithmeticbinary:0004:0003">Mac Catalyst 14.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:bnnsarithmeticbinary:0004:0004">macOS 11.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:bnnsarithmeticbinary:0004:0005">tvOS 14.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:bnnsarithmeticbinary:0004:0006">visionOS 1.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:bnnsarithmeticbinary:0004:0007">watchOS 7.0+</span>

## <span class="ko-segment" data-segment-id="seg:heading:declaration:0005:0001">Declaration</span>

```swift
struct BNNSArithmeticBinary
```

#### <span class="ko-segment" data-segment-id="seg:heading:overview:0007:0001">Overview</span>

<span class="ko-segment" data-segment-id="seg:paragraph:overview:0008:0001">컴포넌트 매니저는 오디오 컴포넌트를 열지 않고도 다양한 정보를 찾을 수 있는 메서드를 제공합니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:overview:0009:0001">이 클래스는 시스템 태그와 임의 사용자 태그를 지원합니다.</span>

```swift
let inputOne: [Float] = [ 1,  2,  3,  4,  5,  6,  7,  8,  9,  10]
let inputTwo: [Float] = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100]
let count = inputOne.count
var outputs = [Float](repeating: 0,
                      count: count)

let descriptor = BNNSNDArrayDescriptor(flags: BNNSNDArrayFlags(0),
                                       layout: BNNSDataLayoutVector,
                                       size: (count, 0, 0, 0, 0, 0, 0, 0),
                                       stride: (0, 0, 0, 0, 0, 0, 0, 0),
                                       data: nil,
                                       data_type: .float,
                                       table_data: nil,
                                       table_data_type: .float,
                                       data_scale: 1,
                                       data_bias: 0)

var fields = BNNSArithmeticBinary(in1: descriptor, in1_type: BNNSSample,
                                  in2: descriptor, in2_type: BNNSConstant,
                                  out: descriptor, out_type: BNNSSample)

let function = BNNSArithmeticAdd

withUnsafeMutableBytes(of: &fields) { fieldsPtr in
    
    var layerParameters = BNNSLayerParametersArithmetic(arithmetic_function: function,
                                                        arithmetic_function_fields: fieldsPtr.baseAddress!,
                                                        activation: .identity)
    
    guard let arithmeticLayer = BNNSFilterCreateLayerArithmetic(&layerParameters, nil) else {
        print("Binary BNNSFilterCreateLayerArithmetic returned nil")
        return
    }
    defer {
        BNNSFilterDestroy(arithmeticLayer)
    }
    
    inputOne.withUnsafeBytes { in1Ptr in
        inputTwo.withUnsafeBytes { in2Ptr in
            
            var input = [in1Ptr.baseAddress!, in2Ptr.baseAddress!]
            
            let error = BNNSArithmeticFilterApplyBatch(arithmeticLayer,
                                                       1,
                                                       2,
                                                       &input,
                                                       [inputOne.count, inputTwo.count],
                                                       &outputs,
                                                       outputs.count)
            
            print("BNNSArithmeticFilterApplyBatch: error", error)
        }
    }
}

// Prints "[11.0, 22.0, 33.0, 44.0, 55.0, 66.0, 77.0, 88.0, 99.0, 110.0]"
print("Binary Arithmetic: outputs", outputs)
```

## <span class="ko-segment" data-segment-id="seg:heading:topics:0011:0001">Topics</span>

### <span class="ko-segment" data-segment-id="seg:heading:creating-an-arithmetic-structure:0012:0001">Creating an Arithmetic Structure</span>

- <span class="ko-segment" data-segment-id="seg:list:creating-an-arithmetic-structure:0013:0001"><a href="bnnsarithmeticbinary/init(in1:in1_type:in2:in2_type:out:out_type:">init(in1: BNNSNDArrayDescriptor, in1_type: BNNSDescriptorType, in2: BNNSNDArrayDescriptor, in2_type: BNNSDescriptorType, out: BNNSNDArrayDescriptor, out_type: BNNSDescriptorType)</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:creating-an-arithmetic-structure:0014:0001">Returns a new arithmetic structure that takes two inputs from the specified parameters.</span>

- <span class="ko-segment" data-segment-id="seg:list:creating-an-arithmetic-structure:0015:0001"><a href="bnnsarithmeticbinary/init.md">init()</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:creating-an-arithmetic-structure:0016:0001">Returns a new arithmetic structure that takes two inputs.</span>

### <span class="ko-segment" data-segment-id="seg:heading:inspecting-the-properties-of-an-arithmetic-structure:0017:0001">Inspecting the Properties of an Arithmetic Structure</span>

- <span class="ko-segment" data-segment-id="seg:list:inspecting-the-properties-of-an-arithmetic-structure:0018:0001"><a href="bnnsarithmeticbinary/in1.md">var in1: BNNSNDArrayDescriptor</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:inspecting-the-properties-of-an-arithmetic-structure:0019:0001">The descriptor of the first input.</span>

- <span class="ko-segment" data-segment-id="seg:list:inspecting-the-properties-of-an-arithmetic-structure:0020:0001"><a href="bnnsarithmeticbinary/in1_type.md">var in1_type: BNNSDescriptorType</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:inspecting-the-properties-of-an-arithmetic-structure:0021:0001">The descriptor type of the first input.</span>

- <span class="ko-segment" data-segment-id="seg:list:inspecting-the-properties-of-an-arithmetic-structure:0022:0001"><a href="bnnsarithmeticbinary/in2.md">var in2: BNNSNDArrayDescriptor</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:inspecting-the-properties-of-an-arithmetic-structure:0023:0001">The descriptor of the second input.</span>

- <span class="ko-segment" data-segment-id="seg:list:inspecting-the-properties-of-an-arithmetic-structure:0024:0001"><a href="bnnsarithmeticbinary/in2_type.md">var in2_type: BNNSDescriptorType</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:inspecting-the-properties-of-an-arithmetic-structure:0025:0001">The descriptor type of the second input.</span>

- <span class="ko-segment" data-segment-id="seg:list:inspecting-the-properties-of-an-arithmetic-structure:0026:0001"><a href="bnnsarithmeticbinary/out.md">var out: BNNSNDArrayDescriptor</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:inspecting-the-properties-of-an-arithmetic-structure:0027:0001">The descriptor of the output.</span>

- <span class="ko-segment" data-segment-id="seg:list:inspecting-the-properties-of-an-arithmetic-structure:0028:0001"><a href="bnnsarithmeticbinary/out_type.md">var out_type: BNNSDescriptorType</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:inspecting-the-properties-of-an-arithmetic-structure:0029:0001">The descriptor type of the output.</span>

## <span class="ko-segment" data-segment-id="seg:heading:relationships:0030:0001">Relationships</span>

### <span class="ko-segment" data-segment-id="seg:heading:conforms-to:0031:0001">Conforms To</span>

- <span class="ko-segment" data-segment-id="seg:list:conforms-to:0032:0001"><a href="../Swift/BitwiseCopyable.md">BitwiseCopyable</a></span>

## <span class="ko-segment" data-segment-id="seg:heading:see-also:0033:0001">See Also</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0034:0001"><a href="bnns/unaryarithmeticlayer.md">class UnaryArithmeticLayer</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0035:0001">레가토 페달을 켜거나 끄는 이벤트 유형입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0036:0001"><a href="bnns/binaryarithmeticlayer.md">class BinaryArithmeticLayer</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0037:0001">음표를 유지하는 이벤트 유형입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0038:0001"><a href="bnns/ternaryarithmeticlayer.md">class TernaryArithmeticLayer</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0039:0001">A layer object that wraps a ternary arithmetic filter and manages its deinitialization.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0040:0001"><a href="bnnsdescriptortype.md">struct BNNSDescriptorType</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0041:0001">Constants that describe the input and output types of an arithmetic operation.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0042:0001"><a href="bnnsarithmeticunary.md">struct BNNSArithmeticUnary</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0043:0001">A structure that contains the input and output of an arithmetic operation with a single input.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0044:0001"><a href="bnnsarithmeticternary.md">struct BNNSArithmeticTernary</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0045:0001">A structure that contains the inputs and output of an arithmetic operation with three inputs.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0046:0001"><a href="bnnsarithmeticfunction.md">struct BNNSArithmeticFunction</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0047:0001">Constants that define arithmetic operations.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0048:0001"><a href="bnnslayerparametersarithmetic.md">struct BNNSLayerParametersArithmetic</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0049:0001">A structure that contains the parameters of an arithmetic layer.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0050:0001"><a href="bnnsfiltercreatelayerarithmetic(_:_:">func BNNSFilterCreateLayerArithmetic(UnsafePointer&lt;BNNSLayerParametersArithmetic&gt;, UnsafePointer&lt;BNNSFilterParameters&gt;?) -&gt; BNNSFilter?</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0051:0001">Returns a new arithmetic layer.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0052:0001"><a href="bnnsarithmeticfilterapplybatch(_:_:_:_:_:_:_:">func BNNSArithmeticFilterApplyBatch(BNNSFilter?, Int, Int, UnsafeMutablePointer&lt;UnsafeRawPointer&gt;, UnsafePointer&lt;Int&gt;, UnsafeMutableRawPointer, Int) -&gt; Int32</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0053:0001">Applies an arithmetic filter to a set of input objects, writing the result to a set of output objects.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0054:0001"><a href="bnnsarithmeticfilterapplybackwardbatch(_:_:_:_:_:_:_:_:_:_:_:">func BNNSArithmeticFilterApplyBackwardBatch(BNNSFilter?, Int, Int, UnsafeMutablePointer&lt;UnsafeRawPointer?&gt;?, UnsafePointer&lt;Int&gt;?, UnsafeMutablePointer&lt;UnsafeMutablePointer&lt;BNNSNDArrayDescriptor&gt;&gt;, UnsafePointer&lt;Int&gt;, UnsafeRawPointer?, Int, UnsafeMutablePointer&lt;BNNSNDArrayDescriptor&gt;, Int) -&gt; Int32</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0055:0001">Applies an arithmetic filter backward to generate input gradients.</span>

---

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0057:0001">*<a href="https://developer.apple.com/documentation/accelerate/bnnsarithmeticbinary">View on Apple Developer</a>*</span>

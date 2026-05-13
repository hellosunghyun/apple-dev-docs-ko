---
source_path: "documentation/Accelerate/bnnsarithmeticunary.md"
upstream_sha: "8a29a1d75e67151b588206d3e921a4ff212726be"
translation_status: machine_translated
official_url: "https://developer.apple.com/documentation/accelerate/bnnsarithmeticunary"
official: false
---

> 비공식 번역입니다. 정확한 최신 내용은 원문을 확인하세요.

# <span class="ko-segment" data-segment-id="seg:heading:bnnsarithmeticunary:0000:0001">BNNSArithmeticUnary</span>

<span class="ko-segment" data-segment-id="seg:paragraph:bnnsarithmeticunary:0001:0001">**Framework**: Accelerate **Kind**: struct</span>

<span class="ko-segment" data-segment-id="seg:paragraph:bnnsarithmeticunary:0002:0001">단일 입력을 갖는 산술 연산의 입력과 출력을 포함하는 구조체입니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:bnnsarithmeticunary:0003:0001">**Availability**:</span>

- <span class="ko-segment" data-segment-id="seg:list:bnnsarithmeticunary:0004:0001">iOS 14.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:bnnsarithmeticunary:0004:0002">iPadOS 14.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:bnnsarithmeticunary:0004:0003">Mac Catalyst 14.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:bnnsarithmeticunary:0004:0004">macOS 11.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:bnnsarithmeticunary:0004:0005">tvOS 14.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:bnnsarithmeticunary:0004:0006">visionOS 1.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:bnnsarithmeticunary:0004:0007">watchOS 7.0+</span>

## <span class="ko-segment" data-segment-id="seg:heading:declaration:0005:0001">Declaration</span>

```swift
struct BNNSArithmeticUnary
```

#### <span class="ko-segment" data-segment-id="seg:heading:overview:0007:0001">Overview</span>

<span class="ko-segment" data-segment-id="seg:paragraph:overview:0008:0001">단항 산술 연산의 입력과 출력 설명 및 형식을 <a href="bnnslayerparametersarithmetic.md">@@TOKEN_0@@</a>에 전달하려면 <a href="bnnsarithmeticunary.md">@@TOKEN_1@@</a> 구조체를 사용합니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:overview:0009:0001">다음 코드는 벡터의 요소별 제곱근을 계산하는 방법을 보여줍니다.</span>

```swift
let input: [Float] = [4, 16, 9, 25, 100]
let count = input.count
var output = [Float](repeating: .nan,
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

var fields = BNNSArithmeticUnary(in: descriptor,
                                 in_type: BNNSSample,
                                 out: descriptor,
                                 out_type: BNNSSample)

withUnsafeMutablePointer(to: &fields) { fieldsPtr in
    
    var layerParameters = BNNSLayerParametersArithmetic(arithmetic_function: BNNSArithmeticSquareRoot,
                                                        arithmetic_function_fields: fieldsPtr,
                                                        activation: .identity)
    
    guard let arithmeticLayer = BNNSFilterCreateLayerArithmetic(&layerParameters, nil) else {
        print("Unary BNNSFilterCreateLayerArithmetic returns nil")
        return
    }
    defer {
        BNNSFilterDestroy(arithmeticLayer)
    }
    
    input.withUnsafeBytes { inPtr in
        var rawPtr = inPtr.baseAddress!
        
        BNNSArithmeticFilterApplyBatch(arithmeticLayer, 1, 1,
                                       &rawPtr,
                                       [count],
                                       &output,
                                       count)
    }
}

// Prints "[2.0, 4.0, 3.0, 5.0, 10.0]"
print("Unary Arithmetic: outputs", output)
```

## <span class="ko-segment" data-segment-id="seg:heading:topics:0011:0001">Topics</span>

### <span class="ko-segment" data-segment-id="seg:heading:creating-an-arithmetic-structure:0012:0001">산술 구조체 생성</span>

- <span class="ko-segment" data-segment-id="seg:list:creating-an-arithmetic-structure:0013:0001"><a href="bnnsarithmeticunary/init(in:in_type:out:out_type:">init(in: BNNSNDArrayDescriptor, in_type: BNNSDescriptorType, out: BNNSNDArrayDescriptor, out_type: BNNSDescriptorType)</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:creating-an-arithmetic-structure:0014:0001">지정한 매개변수에서 단일 입력을 받는 새 산술 구조체를 반환합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:creating-an-arithmetic-structure:0015:0001"><a href="bnnsarithmeticunary/init.md">init()</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:creating-an-arithmetic-structure:0016:0001">단일 입력을 받는 새 산술 구조체를 반환합니다.</span>

### <span class="ko-segment" data-segment-id="seg:heading:inspecting-the-properties-of-an-arithmetic-structure:0017:0001">산술 구조체의 속성 검사</span>

- <span class="ko-segment" data-segment-id="seg:list:inspecting-the-properties-of-an-arithmetic-structure:0018:0001"><a href="bnnsarithmeticunary/in.md">var @@TOKEN_0@@: BNNSNDArrayDescriptor</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:inspecting-the-properties-of-an-arithmetic-structure:0019:0001">입력의 디스크립터입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:inspecting-the-properties-of-an-arithmetic-structure:0020:0001"><a href="bnnsarithmeticunary/in_type.md">var in_type: BNNSDescriptorType</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:inspecting-the-properties-of-an-arithmetic-structure:0021:0001">입력의 디스크립터 유형입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:inspecting-the-properties-of-an-arithmetic-structure:0022:0001"><a href="bnnsarithmeticunary/out.md">var out: BNNSNDArrayDescriptor</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:inspecting-the-properties-of-an-arithmetic-structure:0023:0001">출력의 디스크립터입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:inspecting-the-properties-of-an-arithmetic-structure:0024:0001"><a href="bnnsarithmeticunary/out_type.md">var out_type: BNNSDescriptorType</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:inspecting-the-properties-of-an-arithmetic-structure:0025:0001">출력의 디스크립터 유형입니다.</span>

## <span class="ko-segment" data-segment-id="seg:heading:relationships:0026:0001">Relationships</span>

### <span class="ko-segment" data-segment-id="seg:heading:conforms-to:0027:0001">준수 항목</span>

- <span class="ko-segment" data-segment-id="seg:list:conforms-to:0028:0001"><a href="../Swift/BitwiseCopyable.md">BitwiseCopyable</a></span>

## <span class="ko-segment" data-segment-id="seg:heading:see-also:0029:0001">참고 항목</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0030:0001"><a href="bnns/unaryarithmeticlayer.md">class UnaryArithmeticLayer</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0031:0001">단항 산술 필터를 래핑하고 역초기화를 관리하는 layer 객체입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0032:0001"><a href="bnns/binaryarithmeticlayer.md">class BinaryArithmeticLayer</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0033:0001">이진 산술 필터를 래핑하고 역초기화를 관리하는 layer 객체입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0034:0001"><a href="bnns/ternaryarithmeticlayer.md">class TernaryArithmeticLayer</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0035:0001">삼항 산술 필터를 래핑하고 역초기화를 관리하는 layer 객체입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0036:0001"><a href="bnnsdescriptortype.md">struct BNNSDescriptorType</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0037:0001">산술 연산의 입력 및 출력 형식을 설명하는 상수입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0038:0001"><a href="bnnsarithmeticbinary.md">struct BNNSArithmeticBinary</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0039:0001">두 개의 입력을 갖는 산술 연산의 입력과 출력을 포함하는 구조체입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0040:0001"><a href="bnnsarithmeticternary.md">struct BNNSArithmeticTernary</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0041:0001">세 개의 입력을 갖는 산술 연산의 입력과 출력을 포함하는 구조체입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0042:0001"><a href="bnnsarithmeticfunction.md">struct BNNSArithmeticFunction</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0043:0001">산술 연산을 정의하는 상수입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0044:0001"><a href="bnnslayerparametersarithmetic.md">struct BNNSLayerParametersArithmetic</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0045:0001">산술 layer의 매개변수를 포함하는 구조체입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0046:0001"><a href="bnnsfiltercreatelayerarithmetic(_:_:">func BNNSFilterCreateLayerArithmetic(UnsafePointer&lt;BNNSLayerParametersArithmetic&gt;, UnsafePointer&lt;BNNSFilterParameters&gt;?) -&gt; BNNSFilter?</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0047:0001">새 산술 layer를 반환합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0048:0001"><a href="bnnsarithmeticfilterapplybatch(_:_:_:_:_:_:_:">func BNNSArithmeticFilterApplyBatch(BNNSFilter?, Int, Int, UnsafeMutablePointer&lt;UnsafeRawPointer&gt;, UnsafePointer&lt;Int&gt;, UnsafeMutableRawPointer, Int) -&gt; Int32</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0049:0001">산술 필터를 입력 객체 집합에 적용하고 결과를 출력 객체 집합에 기록합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0050:0001"><a href="bnnsarithmeticfilterapplybackwardbatch(_:_:_:_:_:_:_:_:_:_:_:">func BNNSArithmeticFilterApplyBackwardBatch(BNNSFilter?, Int, Int, UnsafeMutablePointer&lt;UnsafeRawPointer?&gt;?, UnsafePointer&lt;Int&gt;?, UnsafeMutablePointer&lt;UnsafeMutablePointer&lt;BNNSNDArrayDescriptor&gt;&gt;, UnsafePointer&lt;Int&gt;, UnsafeRawPointer?, Int, UnsafeMutablePointer&lt;BNNSNDArrayDescriptor&gt;, Int) -&gt; Int32</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0051:0001">산술 필터의 역방향 적용을 수행해 입력 그래디언트를 생성합니다.</span>

---

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0053:0001">*<a href="https://developer.apple.com/documentation/accelerate/bnnsarithmeticunary">View on Apple Developer</a>*</span>

---
source_path: "documentation/Accelerate/bnns/clipbyglobalnorm-thresholdinputsoutputsglobalnorm.md"
upstream_sha: "8a29a1d75e67151b588206d3e921a4ff212726be"
translation_status: machine_translated
official_url: "https://developer.apple.com/documentation/accelerate/bnns/clipbyglobalnorm-thresholdinputsoutputsglobalnorm"
official: false
---

> 비공식 번역입니다. 정확한 최신 내용은 원문을 확인하세요.

# <span class="ko-segment" data-segment-id="seg:heading:clipbyglobalnormthresholdinputsoutputsglobalnorm:0000:0001">clipByGlobalNorm(threshold:inputs:outputs:globalNorm:)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:clipbyglobalnormthresholdinputsoutputsglobalnorm:0001:0001">**Framework**: Accelerate **Kind**: method</span>

<span class="ko-segment" data-segment-id="seg:paragraph:clipbyglobalnormthresholdinputsoutputsglobalnorm:0002:0001">입력 텐서를 전역 유클리드 노름으로 클리핑하고 결과를 출력 텐서에 기록합니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:clipbyglobalnormthresholdinputsoutputsglobalnorm:0003:0001">**Availability**:</span>

- <span class="ko-segment" data-segment-id="seg:list:clipbyglobalnormthresholdinputsoutputsglobalnorm:0004:0001">iOS 15.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:clipbyglobalnormthresholdinputsoutputsglobalnorm:0004:0002">iPadOS 15.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:clipbyglobalnormthresholdinputsoutputsglobalnorm:0004:0003">Mac Catalyst ?+</span>
- <span class="ko-segment" data-segment-id="seg:list:clipbyglobalnormthresholdinputsoutputsglobalnorm:0004:0004">macOS 12.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:clipbyglobalnormthresholdinputsoutputsglobalnorm:0004:0005">tvOS 15.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:clipbyglobalnormthresholdinputsoutputsglobalnorm:0004:0006">visionOS ?+</span>
- <span class="ko-segment" data-segment-id="seg:list:clipbyglobalnormthresholdinputsoutputsglobalnorm:0004:0007">watchOS 8.0+</span>

## <span class="ko-segment" data-segment-id="seg:heading:declaration:0005:0001">Declaration</span>

```swift
static func clipByGlobalNorm(threshold: Float, inputs: [BNNSNDArrayDescriptor], outputs: [BNNSNDArrayDescriptor], globalNorm: Float = 0) throws
```

#### <span class="ko-segment" data-segment-id="seg:heading:discussion:0007:0001">Discussion</span>

<span class="ko-segment" data-segment-id="seg:paragraph:discussion:0008:0001">이 함수를 사용하면 입력 텐서 배열의 값을 최대 전역 유클리드 노름으로 클리핑할 수 있습니다.</span> <span class="ko-segment" data-segment-id="seg:paragraph:discussion:0008:0002">입력 텐서의 전역 노름을 알고 있다면 해당 값을 <code>globalNorm</code>으로 전달합니다.</span> <span class="ko-segment" data-segment-id="seg:paragraph:discussion:0008:0003">그렇지 않으면 <code>0</code>을 전달하여 함수가 노름을 계산하도록 지정합니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:discussion:0009:0001">유클리드 노름은 두 텐서의 제곱 합의 제곱근입니다.</span> <span class="ko-segment" data-segment-id="seg:paragraph:discussion:0009:0002">다음 코드는 두 입력 텐서의 유클리드 노름을 전역 유클리드 노름의 절반으로 클리핑합니다:
``<code>swift
static func clipToGlobalNorm() {
    let inputOne = BNNSNDArrayDescriptor.allocate(
        initializingFrom: [1, 2, 3, 4] as [Float],
        shape: .vector(4))
    let inputTwo = BNNSNDArrayDescriptor.allocate(
        initializingFrom: [5, 6, 7, 8] as [Float],
        shape: .vector(4))
    
    let outputOne = BNNSNDArrayDescriptor.allocateUninitialized(
        scalarType: Float.self,
        shape: .vector(4))
    let outputTwo = BNNSNDArrayDescriptor.allocateUninitialized(
        scalarType: Float.self,
        shape: .vector(4))
    
    try? BNNS.clipByGlobalNorm(threshold: 0.5 * 14.2828568570857,
                               inputs: [inputOne, inputTwo],
                               outputs: [outputOne, outputTwo])
    
    // Prints: </code>[0.5, 1.0, 1.5, 2.0]<code>
    print(outputOne.makeArray(of: Float.self)!)
    
    // Prints: </code>[2.5, 3.0, 3.5, 4.0]<code>
    print(outputTwo.makeArray(of: Float.self)!)

    inputOne.deallocate()
    inputTwo.deallocate()
    outputOne.deallocate()
    outputTwo.deallocate()
}
</code>``</span>

```swift
static func clipToGlobalNorm() {
    let inputOne = BNNSNDArrayDescriptor.allocate(
        initializingFrom: [1, 2, 3, 4] as [Float],
        shape: .vector(4))
    let inputTwo = BNNSNDArrayDescriptor.allocate(
        initializingFrom: [5, 6, 7, 8] as [Float],
        shape: .vector(4))
    
    let outputOne = BNNSNDArrayDescriptor.allocateUninitialized(
        scalarType: Float.self,
        shape: .vector(4))
    let outputTwo = BNNSNDArrayDescriptor.allocateUninitialized(
        scalarType: Float.self,
        shape: .vector(4))
    
    try? BNNS.clipByGlobalNorm(threshold: 0.5 * 14.2828568570857,
                               inputs: [inputOne, inputTwo],
                               outputs: [outputOne, outputTwo])
    
    // Prints: `[0.5, 1.0, 1.5, 2.0]`
    print(outputOne.makeArray(of: Float.self)!)
    
    // Prints: `[2.5, 3.0, 3.5, 4.0]`
    print(outputTwo.makeArray(of: Float.self)!)

    inputOne.deallocate()
    inputTwo.deallocate()
    outputOne.deallocate()
    outputTwo.deallocate()
}
```

## <span class="ko-segment" data-segment-id="seg:heading:parameters:0011:0001">Parameters</span>

- <span class="ko-segment" data-segment-id="seg:list:parameters:0012:0001"><code>threshold</code>: 그래디언트를 클리핑할 최대 유클리드 노름입니다.</span>
- <span class="ko-segment" data-segment-id="seg:list:parameters:0012:0002"><code>inputs</code>: 입력 디스크립터 배열입니다.</span>
- <span class="ko-segment" data-segment-id="seg:list:parameters:0012:0003"><code>outputs</code>: 출력 디스크립터 배열입니다.</span>
- <span class="ko-segment" data-segment-id="seg:list:parameters:0012:0004"><code>globalNorm</code>: 사용할 전역 노름입니다. <code>0</code>으로 설정하면 함수가 입력 디스크립터에서 노름을 계산하도록 지정합니다.</span>

## <span class="ko-segment" data-segment-id="seg:heading:see-also:0013:0001">참고 항목</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0014:0001"><a href="bnns/copy(_:to:filterparameters:">static func copy(BNNSNDArrayDescriptor, to: BNNSNDArrayDescriptor, filterParameters: BNNSFilterParameters?) throws</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0015:0001">n차원 배열 디스크립터의 내용을 동일한 모양의 다른 디스크립터로 복사합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0016:0001"><a href="bnns/transpose(input:output:firsttransposeaxis:secondtransposeaxis:filterparameters:">static func transpose(input: BNNSNDArrayDescriptor, output: BNNSNDArrayDescriptor, firstTransposeAxis: Int, secondTransposeAxis: Int, filterParameters: BNNSFilterParameters?) throws</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0017:0001">텐서를 두 차원의 차원을 서로 바꿔 전치합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0018:0001"><a href="bnnscopy(_:_:_:">func BNNSCopy(UnsafeMutablePointer&lt;BNNSNDArrayDescriptor&gt;, UnsafePointer&lt;BNNSNDArrayDescriptor&gt;, UnsafePointer&lt;BNNSFilterParameters&gt;?) -&gt; Int32</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0019:0001">동일한 모양의 n차원 배열 디스크립터 내용을 다른 디스크립터에 복사합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0020:0001"><a href="bnnstranspose(_:_:_:_:_:">func BNNSTranspose(UnsafeMutablePointer&lt;BNNSNDArrayDescriptor&gt;, UnsafePointer&lt;BNNSNDArrayDescriptor&gt;, Int, Int, UnsafePointer&lt;BNNSFilterParameters&gt;?) -&gt; Int32</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0021:0001">텐서를 두 차원을 서로 바꿔 전치합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0022:0001"><a href="bnnsgetpointer(_:_:">func BNNSGetPointer(BNNSFilter?, BNNSPointerSpecifier) -&gt; BNNSNDArrayDescriptor</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0023:0001">필터 데이터 멤버에 대한 참조를 포함하는 n차원 배열 디스크립터를 반환합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0024:0001"><a href="bnnspointerspecifier.md">struct BNNSPointerSpecifier</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0025:0001">BNNS get filter 함수가 반환할 포인터를 지정하는 상수입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0026:0001"><a href="bnns/gramlayer.md">class GramLayer</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0027:0001">Gram 행렬 필터를 래핑하고 비초기화를 관리하는 레이어 객체입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0028:0001"><a href="bnnslayerparametersgram.md">struct BNNSLayerParametersGram</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0029:0001">Gram 행렬 레이어를 정의하는 파라미터 집합입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0030:0001"><a href="bnnsfiltercreatelayergram(_:_:">func BNNSFilterCreateLayerGram(UnsafePointer&lt;BNNSLayerParametersGram&gt;, UnsafePointer&lt;BNNSFilterParameters&gt;?) -&gt; BNNSFilter?</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0031:0001">새 Gram 행렬 레이어를 반환합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0032:0001"><a href="bnns/clip(to:input:output:">static func clip(to: ClosedRange&lt;Float&gt;, input: BNNSNDArrayDescriptor, output: BNNSNDArrayDescriptor) throws</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0033:0001">입력 텐서를 닫힌 범위로 클리핑하고 결과를 출력 텐서에 기록합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0034:0001">[static func clipByNorm(threshold: Float, input: BNNSNDArrayDescriptor, output: BNNSNDArrayDescriptor, axes: [Int]?) throws](bnns/clipbynorm(threshold:input:output:axes:).md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0035:0001">입력 텐서를 유클리드 노름으로 클리핑하고 결과를 출력 텐서에 기록합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0036:0001"><a href="bnnsclipbyvalue(_:_:_:_:">func BNNSClipByValue(UnsafeMutablePointer&lt;BNNSNDArrayDescriptor&gt;, UnsafePointer&lt;BNNSNDArrayDescriptor&gt;, Float, Float) -&gt; Int32</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0037:0001">텐서의 값을 지정한 최소값과 최대값 범위로 클리핑합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0038:0001"><a href="bnnsclipbynorm(_:_:_:_:">func BNNSClipByNorm(UnsafeMutablePointer&lt;BNNSNDArrayDescriptor&gt;, UnsafePointer&lt;BNNSNDArrayDescriptor&gt;, Float, UInt32) -&gt; Int32</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0039:0001">텐서의 값을 최대 유클리디안 노름으로 클리핑합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0040:0001"><a href="bnnsclipbyglobalnorm(_:_:_:_:_:">func BNNSClipByGlobalNorm(UnsafeMutablePointer&lt;UnsafeMutablePointer&lt;BNNSNDArrayDescriptor&gt;&gt;, UnsafeMutablePointer&lt;UnsafePointer&lt;BNNSNDArrayDescriptor&gt;&gt;, Int, Float, Float) -&gt; Int32</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0041:0001">텐서의 값을 최대 전역 유클리디안 노름으로 클리핑합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0042:0001"><a href="bnns/copybandpart(_:to:lowerbandcount:upperbandcount:filterparameters:">static func copyBandPart(BNNSNDArrayDescriptor, to: BNNSNDArrayDescriptor, lowerBandCount: Int?, upperBandCount: Int?, filterParameters: BNNSFilterParameters?) throws</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0043:0001">행렬의 지정된 하위 대각선과 상위 대각선 요소를 복사하고, 나머지 요소는 0으로 설정합니다.</span>

---

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0045:0001">*<a href="https://developer.apple.com/documentation/accelerate/bnns/clipbyglobalnorm(threshold:inputs:outputs:globalnorm:">View on Apple Developer</a>)*</span>

---
source_path: "documentation/Accelerate/bnns/clipbynorm-thresholdinputoutputaxes.md"
upstream_sha: "8a29a1d75e67151b588206d3e921a4ff212726be"
translation_status: machine_translated
official_url: "https://developer.apple.com/documentation/accelerate/bnns/clipbynorm-thresholdinputoutputaxes"
official: false
---

> 비공식 번역입니다. 정확한 최신 내용은 원문을 확인하세요.

# <span class="ko-segment" data-segment-id="seg:heading:clipbynormthresholdinputoutputaxes:0000:0001">clipByNorm(threshold:input:output:axes:)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:clipbynormthresholdinputoutputaxes:0001:0001">**Framework**: Accelerate **Kind**: method</span>

<span class="ko-segment" data-segment-id="seg:paragraph:clipbynormthresholdinputoutputaxes:0002:0001">입력 텐서를 유클리드 노름으로 클리핑하고 결과를 출력 텐서에 씁니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:clipbynormthresholdinputoutputaxes:0003:0001">**Availability**:</span>

- <span class="ko-segment" data-segment-id="seg:list:clipbynormthresholdinputoutputaxes:0004:0001">iOS 15.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:clipbynormthresholdinputoutputaxes:0004:0002">iPadOS 15.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:clipbynormthresholdinputoutputaxes:0004:0003">Mac Catalyst ?+</span>
- <span class="ko-segment" data-segment-id="seg:list:clipbynormthresholdinputoutputaxes:0004:0004">macOS 12.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:clipbynormthresholdinputoutputaxes:0004:0005">tvOS 15.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:clipbynormthresholdinputoutputaxes:0004:0006">visionOS ?+</span>
- <span class="ko-segment" data-segment-id="seg:list:clipbynormthresholdinputoutputaxes:0004:0007">watchOS 8.0+</span>

## <span class="ko-segment" data-segment-id="seg:heading:declaration:0005:0001">Declaration</span>

```swift
static func clipByNorm(threshold: Float, input: BNNSNDArrayDescriptor, output: BNNSNDArrayDescriptor, axes: [Int]? = nil) throws
```

#### <span class="ko-segment" data-segment-id="seg:heading:discussion:0007:0001">Discussion</span>

<span class="ko-segment" data-segment-id="seg:paragraph:discussion:0008:0001">이 함수를 사용하여 입력 텐서의 값을 최대 유클리드 노름으로 클리핑합니다.</span> <span class="ko-segment" data-segment-id="seg:paragraph:discussion:0008:0002">유클리드 노름은 두 텐서의 제곱 합의 제곱근입니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:discussion:0009:0001">이 함수는 전체 텐서 또는 특정 차원의 노름을 기준으로 클리핑을 지원합니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:discussion:0010:0001">다음 코드는 축 <code>1</code>의 값을 유클리드 노름 <code>10</code>으로 클리핑합니다.</span> <span class="ko-segment" data-segment-id="seg:paragraph:discussion:0010:0002"><code>[1, 2, 3]</code>와 <code>[4, 5, 6]</code>의 유클리드 노름은 모두 <code>10</code>보다 작으므로 함수는 변경하지 않고 반환합니다.</span> <span class="ko-segment" data-segment-id="seg:paragraph:discussion:0010:0003">그러나 <code>[7, 8, 9]</code>의 유클리드 노름은 <code>10</code>보다 크므로 함수는 그 값을 적절히 스케일링해 반환합니다.

``<code>swift
static func clipToNorm() {
    let inputValues: [Float] = [1, 2, 3,
                                4, 5, 6,
                                7, 8, 9]
    
    let input = BNNSNDArrayDescriptor.allocate(
        initializingFrom: inputValues,
        shape: .matrixRowMajor(3, 3))
    let output = BNNSNDArrayDescriptor.allocateUninitialized(
        scalarType: Float.self,
        shape: input.shape)
    
    try? BNNS.clipByNorm(threshold: 10,
                        input: input,
                        output: output,
                        axes: [1])
    
    // Prints </code>[1.0, 2.0, 3.0,
    //          4.0, 5.0, 6.0,
    //          5.0257072, 5.743665, 6.461623]<code>
    print(output.makeArray(of: Float.self)!)

    input.deallocate()
    output.deallocate()
}
</code>``</span>

```swift
static func clipToNorm() {
    let inputValues: [Float] = [1, 2, 3,
                                4, 5, 6,
                                7, 8, 9]
    
    let input = BNNSNDArrayDescriptor.allocate(
        initializingFrom: inputValues,
        shape: .matrixRowMajor(3, 3))
    let output = BNNSNDArrayDescriptor.allocateUninitialized(
        scalarType: Float.self,
        shape: input.shape)
    
    try? BNNS.clipByNorm(threshold: 10,
                        input: input,
                        output: output,
                        axes: [1])
    
    // Prints `[1.0, 2.0, 3.0,
    //          4.0, 5.0, 6.0,
    //          5.0257072, 5.743665, 6.461623]`
    print(output.makeArray(of: Float.self)!)

    input.deallocate()
    output.deallocate()
}
```

## <span class="ko-segment" data-segment-id="seg:heading:parameters:0012:0001">Parameters</span>

- <span class="ko-segment" data-segment-id="seg:list:parameters:0013:0001"><code>threshold</code>: 그래디언트를 클리핑할 최대 유클리드 노름입니다.</span>
- <span class="ko-segment" data-segment-id="seg:list:parameters:0013:0002"><code>input</code>: 입력의 디스크립터입니다.</span>
- <span class="ko-segment" data-segment-id="seg:list:parameters:0013:0003"><code>output</code>: 출력의 디스크립터입니다.</span>
- <span class="ko-segment" data-segment-id="seg:list:parameters:0013:0004"><code>axes</code>: 함수가 유클리드 노름을 계산할 때 사용하는 차원입니다. <code>0</code>으로 설정하면 함수가 모든 차원에 대해 노름을 계산하도록 지정됩니다.</span>

## <span class="ko-segment" data-segment-id="seg:heading:see-also:0014:0001">참고 항목</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0015:0001"><a href="bnns/copy(_:to:filterparameters:">static func copy(BNNSNDArrayDescriptor, to: BNNSNDArrayDescriptor, filterParameters: BNNSFilterParameters?) throws</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0016:0001">같은 모양의 다른 디스크립터로 n차원 배열 디스크립터의 내용을 복사합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0017:0001"><a href="bnns/transpose(input:output:firsttransposeaxis:secondtransposeaxis:filterparameters:">static func transpose(input: BNNSNDArrayDescriptor, output: BNNSNDArrayDescriptor, firstTransposeAxis: Int, secondTransposeAxis: Int, filterParameters: BNNSFilterParameters?) throws</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0018:0001">두 차원을 교환하여 텐서를 전치합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0019:0001"><a href="bnnscopy(_:_:_:">func BNNSCopy(UnsafeMutablePointer&lt;BNNSNDArrayDescriptor&gt;, UnsafePointer&lt;BNNSNDArrayDescriptor&gt;, UnsafePointer&lt;BNNSFilterParameters&gt;?) -&gt; Int32</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0020:0001">동일한 모양의 다른 디스크립터로 n차원 배열 디스크립터의 내용을 복사합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0021:0001"><a href="bnnstranspose(_:_:_:_:_:">func BNNSTranspose(UnsafeMutablePointer&lt;BNNSNDArrayDescriptor&gt;, UnsafePointer&lt;BNNSNDArrayDescriptor&gt;, Int, Int, UnsafePointer&lt;BNNSFilterParameters&gt;?) -&gt; Int32</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0022:0001">Transposes a tensor by swapping two of its dimensions.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0023:0001"><a href="bnnsgetpointer(_:_:">func BNNSGetPointer(BNNSFilter?, BNNSPointerSpecifier) -&gt; BNNSNDArrayDescriptor</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0024:0001">Returns an n-dimensional array descriptor that contains a reference to a filter-data member.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0025:0001"><a href="bnnspointerspecifier.md">struct BNNSPointerSpecifier</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0026:0001">Constants that specify which pointer the BNNS get filter function returns.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0027:0001"><a href="bnns/gramlayer.md">class GramLayer</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0028:0001">A layer object that wraps a Gram matrix filter and manages its deinitialization.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0029:0001"><a href="bnnslayerparametersgram.md">struct BNNSLayerParametersGram</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0030:0001">A set of parameters that define a Gram matrix layer.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0031:0001"><a href="bnnsfiltercreatelayergram(_:_:">func BNNSFilterCreateLayerGram(UnsafePointer&lt;BNNSLayerParametersGram&gt;, UnsafePointer&lt;BNNSFilterParameters&gt;?) -&gt; BNNSFilter?</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0032:0001">Returns a new Gram matrix layer.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0033:0001"><a href="bnns/clip(to:input:output:">static func clip(to: ClosedRange&lt;Float&gt;, input: BNNSNDArrayDescriptor, output: BNNSNDArrayDescriptor) throws</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0034:0001">Clips the input tensor to a closed range and writes the result to the output tensor.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0035:0001">[static func clipByGlobalNorm(threshold: Float, inputs: [BNNSNDArrayDescriptor], outputs: [BNNSNDArrayDescriptor], globalNorm: Float) throws](bnns/clipbyglobalnorm(threshold:inputs:outputs:globalnorm:).md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0036:0001">Clips the input tensors to a global Euclidean norm and writes the result to the output tensors.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0037:0001"><a href="bnnsclipbyvalue(_:_:_:_:">func BNNSClipByValue(UnsafeMutablePointer&lt;BNNSNDArrayDescriptor&gt;, UnsafePointer&lt;BNNSNDArrayDescriptor&gt;, Float, Float) -&gt; Int32</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0038:0001">Clips a tensor’s values to the specified minimum and maximum values.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0039:0001"><a href="bnnsclipbynorm(_:_:_:_:">func BNNSClipByNorm(UnsafeMutablePointer&lt;BNNSNDArrayDescriptor&gt;, UnsafePointer&lt;BNNSNDArrayDescriptor&gt;, Float, UInt32) -&gt; Int32</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0040:0001">Clips a tensor’s values to a maximum Euclidean norm.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0041:0001"><a href="bnnsclipbyglobalnorm(_:_:_:_:_:">func BNNSClipByGlobalNorm(UnsafeMutablePointer&lt;UnsafeMutablePointer&lt;BNNSNDArrayDescriptor&gt;&gt;, UnsafeMutablePointer&lt;UnsafePointer&lt;BNNSNDArrayDescriptor&gt;&gt;, Int, Float, Float) -&gt; Int32</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0042:0001">Clips a tensor’s values to a maximum global Euclidean norm.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0043:0001"><a href="bnns/copybandpart(_:to:lowerbandcount:upperbandcount:filterparameters:">static func copyBandPart(BNNSNDArrayDescriptor, to: BNNSNDArrayDescriptor, lowerBandCount: Int?, upperBandCount: Int?, filterParameters: BNNSFilterParameters?) throws</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0044:0001">Copies the specified subdiagonals and superdiagonals of a matrix, and sets other elements to zero.</span>

---

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0046:0001">*<a href="https://developer.apple.com/documentation/accelerate/bnns/clipbynorm(threshold:input:output:axes:">View on Apple Developer</a>)*</span>

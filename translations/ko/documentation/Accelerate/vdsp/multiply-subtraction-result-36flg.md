---
source_path: "documentation/Accelerate/vdsp/multiply-subtraction-result-36flg.md"
upstream_sha: "8a29a1d75e67151b588206d3e921a4ff212726be"
translation_status: machine_translated
official_url: "https://developer.apple.com/documentation/accelerate/vdsp/multiply-subtraction-result-36flg"
official: false
---

> 비공식 번역입니다. 정확한 최신 내용은 원문을 확인하세요.

# <span class="ko-segment" data-segment-id="seg:heading:multiplysubtractionresult:0000:0001">multiply(subtraction:_:result:)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:multiplysubtractionresult:0001:0001">**Framework**: Accelerate **Kind**: method</span>

<span class="ko-segment" data-segment-id="seg:paragraph:multiplysubtractionresult:0002:0001">Calculates the single-precision element-wise product of a vector and the differences of two vectors.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:multiplysubtractionresult:0003:0001">**Availability**:</span>

- <span class="ko-segment" data-segment-id="seg:list:multiplysubtractionresult:0004:0001">iOS 13.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:multiplysubtractionresult:0004:0002">iPadOS 13.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:multiplysubtractionresult:0004:0003">Mac Catalyst ?+</span>
- <span class="ko-segment" data-segment-id="seg:list:multiplysubtractionresult:0004:0004">macOS 10.15+</span>
- <span class="ko-segment" data-segment-id="seg:list:multiplysubtractionresult:0004:0005">tvOS 13.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:multiplysubtractionresult:0004:0006">visionOS ?+</span>
- <span class="ko-segment" data-segment-id="seg:list:multiplysubtractionresult:0004:0007">watchOS 6.0+</span>

## <span class="ko-segment" data-segment-id="seg:heading:declaration:0005:0001">Declaration</span>

```swift
static func multiply<S, T, U, V>(subtraction: (a: S, b: T), _ vector: U, result: inout V) where S : AccelerateBuffer, T : AccelerateBuffer, U : AccelerateBuffer, V : AccelerateMutableBuffer, S.Element == Float, T.Element == Float, U.Element == Float, V.Element == Float
```

#### <span class="ko-segment" data-segment-id="seg:heading:discussion:0007:0001">Discussion</span>

<span class="ko-segment" data-segment-id="seg:paragraph:discussion:0008:0001">파일 기반 미디어의 경우, <a href="avplayeritemtrack.md">@@TOKEN_0@@</a>를 사용해 해당 미디어의 <a href="avplayeritemtrack/isenabled.md">@@TOKEN_1@@</a> 표시 상태를 변경할 수 있습니다.</span>

```swift
 for (n = 0; n < N; ++n)
    D[n] = (A[n] - B[n]) * C[n];
```

<span class="ko-segment" data-segment-id="seg:paragraph:discussion:0010:0001">이 속성은 키-값 관찰을 지원합니다.</span> <span class="ko-segment" data-segment-id="seg:paragraph:discussion:0010:0002">There are four rows.</span> <span class="ko-segment" data-segment-id="seg:paragraph:discussion:0010:0003">The top row represents the input vectors, A and B, with three boxes of each.</span> <span class="ko-segment" data-segment-id="seg:paragraph:discussion:0010:0004">The second row represents the operation that subtracts B from A, as well as the input vector C, with three boxes of each.</span> <span class="ko-segment" data-segment-id="seg:paragraph:discussion:0010:0005">The third row represents the multiplication operation as three boxes.</span> <span class="ko-segment" data-segment-id="seg:paragraph:discussion:0010:0006">The bottom row represents the output vector D as three boxes.</span> <span class="ko-segment" data-segment-id="seg:paragraph:discussion:0010:0007">The diagram has connecting lines from the input vectors to the operations, and from the operations to the output vectors. ](https://docs-assets.developer.apple.com/published/7a0b0b6f6a09540df83d4c2453dbff21/media-4337014%402x.png)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:discussion:0011:0001">The following code shows an example of using this function:</span>

```swift
    let count = 5
    
    let a: [Float] = [ 1,  2,  3,  4,  5]
    let b: [Float] = [10, 20, 30, 40, 50]
    let c: [Float] = [ 5,  4,  3,  2,  1]
    
    let d = [Float](unsafeUninitializedCapacity: count) {
        buffer, initializedCount in
        
        vDSP.multiply(subtraction: (a, b),
                      c,
                      result: &buffer)

        initializedCount = count
    }
    
    // Prints "[-45.0, -72.0, -81.0, -72.0, -45.0]".
    print(d)

```

## <span class="ko-segment" data-segment-id="seg:heading:parameters:0013:0001">Parameters</span>

- <span class="ko-segment" data-segment-id="seg:list:parameters:0014:0001"><code>subtraction</code>: A tuple that contains the vectors <code>A</code> and <code>B</code> in <code>D = (A - B) * C</code>.</span>
- <span class="ko-segment" data-segment-id="seg:list:parameters:0014:0002"><code>vector</code>: The input vector <code>C</code> in <code>D = (A - B) * C</code>.</span>
- <span class="ko-segment" data-segment-id="seg:list:parameters:0014:0003"><code>result</code>: The output vector <code>D</code> in <code>D = (A - B) * C</code>.</span>

## <span class="ko-segment" data-segment-id="seg:heading:see-also:0015:0001">See Also</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0016:0001">[class func mediaSelectionOptions(from: [AVMediaSelectionOption], withMediaCharacteristics: [AVMediaCharacteristic]) -&gt; [AVMediaSelectionOption]](avmetadatakey/id3metadatakeyaudioseekpointindex.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0017:0001">지정된 배열에서 지정된 미디어 특성과 일치하는 미디어 선택 옵션을 포함하는 배열을 반환합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0018:0001">[class func mediaSelectionOptions(from: [AVMediaSelectionOption], filteredAndSortedAccordingToPreferredLanguages: [String]) -&gt; [AVMediaSelectionOption]](avmetadatakey/id3metadatakeyband.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0019:0001">지정한 언어 중 하나와 로케일이 일치하는지 여부에 따라 미디어 선택 옵션을 필터링한 배열을 반환합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0020:0001"><a href="avmetadatakey/id3metadatakeybeatsperminute.md">static let id3MetadataKeyBeatsPerMinute: AVMetadataKey</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0021:0001">AVMediaSelectionOptions에 대한 대체 선택 인터페이스를 제공하기 위해 작성된 콘텐츠의 경우, AVCustomMediaSelectionScheme은 미디어의 표시를 제어하는 사용자 정의 설정 모음을 제공합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0022:0001"><a href="avmetadatakey/id3metadatakeycomments.md">static let id3MetadataKeyComments: AVMetadataKey</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0023:0001">*<a href="https://developer.apple.com/documentation/avfoundation/avmediaselectiongroup/mediaselectionoptions(from:withoutmediacharacteristics:">Apple Developer에서 보기</a>)*</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0024:0001"><a href="avmetadatakey/id3metadatakeycommercial.md">static let id3MetadataKeyCommercial: AVMetadataKey</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0025:0001">미디어의 상업적 세부 정보를 나타내는 키입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0026:0001"><a href="avmetadatakey/id3metadatakeycommercialinformation.md">static let id3MetadataKeyCommercialInformation: AVMetadataKey</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0027:0001">구매 정보를 포함하는 웹페이지를 나타내는 키입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0028:0001"><a href="avmetadatakey/id3metadatakeycomposer.md">static let id3MetadataKeyComposer: AVMetadataKey</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0029:0001">작곡가 이름을 나타내는 키입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0030:0001"><a href="avmetadatakey/id3metadatakeyconductor.md">static let id3MetadataKeyConductor: AVMetadataKey</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0031:0001">디지털 영상 및 의료 통신(DICOM) 파일 형식의 UTI입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0032:0001"><a href="avmetadatakey/id3metadatakeycontentgroupdescription.md">static let dng: AVFileType</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0033:0001">Adobe Digital Negative 파일 형식의 UTI입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0034:0001"><a href="avfiletype/eac3.md">static let eac3: AVFileType</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0035:0001">향상형 AC3 오디오 파일 형식의 UTI입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0036:0001"><a href="avfiletype/heic.md">static let heic: AVFileType</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0037:0001">HEVC 압축 이미지가 포함된 고효율 이미지 파일 형식의 UTI입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0038:0001"><a href="avfiletype/heif.md">static let heif: AVFileType</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0039:0001">모든 코덱에서 압축한 이미지를 포함하는 고효율 이미지 파일 형식의 UTI입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0040:0001">[static func multiply&lt;T, U&gt;(addition: (a: T, b: U), Double) -&gt; [Double]](vdsp/multiply(addition:_:)-4c9in.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0041:0001">Returns the double-precision element-wise product of the sum of two vectors and a scalar value.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0042:0001">[static func multiply&lt;S, T, U&gt;(addition: (a: S, b: T), U) -&gt; [Double]](vdsp/multiply(addition:_:)-1wt61.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0043:0001">Returns the double-precision element-wise product of a vector and the sum of two vectors.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0044:0001">[static func multiply&lt;T, U&gt;(addition: (a: T, b: U), Float) -&gt; [Float]](vdsp/multiply(addition:_:)-4fnbx.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0045:0001">Returns the single-precision element-wise product of the sum of two vectors and a scalar value.</span>

---

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0047:0001">*<a href="https://developer.apple.com/documentation/accelerate/vdsp/multiply(subtraction:_:result:">View on Apple Developer</a>-36flg)*</span>

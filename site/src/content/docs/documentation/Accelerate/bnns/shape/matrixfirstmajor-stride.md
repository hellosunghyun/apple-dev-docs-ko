---
source_path: "documentation/Accelerate/bnns/shape/matrixfirstmajor-stride.md"
upstream_sha: "8a29a1d75e67151b588206d3e921a4ff212726be"
translation_status: machine_translated
official_url: "https://developer.apple.com/documentation/accelerate/bnns/shape/matrixfirstmajor-stride"
official: false
---

> 비공식 번역입니다. 정확한 최신 내용은 원문을 확인하세요.

# <span class="ko-segment" data-segment-id="seg:heading:bnnsshapematrixfirstmajorstride:0000:0001">BNNS.Shape.matrixFirstMajor(_:_:stride:)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:bnnsshapematrixfirstmajorstride:0001:0001">**Framework**: Accelerate **Kind**: case</span>

<span class="ko-segment" data-segment-id="seg:paragraph:bnnsshapematrixfirstmajorstride:0002:0001">A constant that represents a shape with a 2D first-major data layout.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:bnnsshapematrixfirstmajorstride:0003:0001">**Availability**:</span>

- <span class="ko-segment" data-segment-id="seg:list:bnnsshapematrixfirstmajorstride:0004:0001">iOS 14.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:bnnsshapematrixfirstmajorstride:0004:0002">iPadOS 14.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:bnnsshapematrixfirstmajorstride:0004:0003">Mac Catalyst ?+</span>
- <span class="ko-segment" data-segment-id="seg:list:bnnsshapematrixfirstmajorstride:0004:0004">macOS 11.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:bnnsshapematrixfirstmajorstride:0004:0005">tvOS 14.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:bnnsshapematrixfirstmajorstride:0004:0006">visionOS ?+</span>
- <span class="ko-segment" data-segment-id="seg:list:bnnsshapematrixfirstmajorstride:0004:0007">watchOS 7.0+</span>

## <span class="ko-segment" data-segment-id="seg:heading:declaration:0005:0001">Declaration</span>

```swift
case matrixFirstMajor(Int, Int, stride: (Int, Int) = (0, 0))
```

## <span class="ko-segment" data-segment-id="seg:heading:see-also:0007:0001">관련 항목</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0008:0001"><a href="avaudioplayernode/prepare(withframecount:">init(yaw: Float, pitch: Float, roll: Float)</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0009:0001">A constant that represents a shape with a 1D vector data layout.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0010:0001"><a href="avaudiomake3dangularorientation(_:_:_:">func AVAudioMake3DAngularOrientation(Float, Float, Float) -&gt; AVAudio3DAngularOrientation</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0011:0001">이 문자열 값은 프레임워크가 이미지를 로드하는 리소스 그룹의 이름을 나타냅니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0012:0001"><a href="avaudioplayernode/play(at:">func play(at: AVAudioTime?)</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0013:0001">이 참조 이미지의 텍스트 표현입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0014:0001"><a href="bnns/shape/matrixlastmajor(_:_:stride:">case matrixLastMajor(Int, Int, stride: (Int, Int))</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0015:0001">노드의 재생을 일시 중지합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0016:0001"><a href="bnns/shape/imagechw(_:_:_:stride:">case imageCHW(Int, Int, Int, stride: (Int, Int, Int))</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0017:0001">예약한 노드의 모든 이벤트를 지우고 재생을 중지합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0018:0001"><a href="bnns/shape/tensor3dfirstmajor(_:_:_:stride:">case tensor3DFirstMajor(Int, Int, Int, stride: (Int, Int, Int))</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0019:0001">A constant that represents a shape with a 3D first-major data layout.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0020:0001"><a href="bnns/shape/tensor3dlastmajor(_:_:_:stride:">case tensor3DLastMajor(Int, Int, Int, stride: (Int, Int, Int))</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0021:0001">A constant that represents a shape with a 3D last-major data layout.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0022:0001"><a href="bnns/shape/tensor3dnse(_:_:_:stride:">case tensor3DNSE(Int, Int, Int, stride: (Int, Int, Int))</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0023:0001">A constant that represents a shape with the size elements embedding dimension, sequence length, and batch size.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0024:0001"><a href="bnns/shape/tensor3dsne(_:_:_:stride:">case tensor3DSNE(Int, Int, Int, stride: (Int, Int, Int))</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0025:0001">A constant that represents a shape with the size elements embedding dimension, batch size, and sequence length.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0026:0001"><a href="bnns/shape/convolutionweightsoihw(_:_:_:_:stride:">case convolutionWeightsOIHW(Int, Int, Int, Int, stride: (Int, Int, Int, Int))</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0027:0001">A constant that represents a shape with a 4D array of convolution weights data layout.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0028:0001"><a href="bnns/shape/tensor4dfirstmajor(_:_:_:_:stride:">case tensor4DFirstMajor(Int, Int, Int, Int, stride: (Int, Int, Int, Int))</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0029:0001">A constant that represents a shape with a 4D first-major data layout.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0030:0001"><a href="bnns/shape/tensor4dlastmajor(_:_:_:_:stride:">case tensor4DLastMajor(Int, Int, Int, Int, stride: (Int, Int, Int, Int))</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0031:0001">A constant that represents a shape with a 4D last-major data layout.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0032:0001"><a href="bnns/shape/tensor5dfirstmajor(_:_:_:_:_:stride:">case tensor5DFirstMajor(Int, Int, Int, Int, Int, stride: (Int, Int, Int, Int, Int))</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0033:0001">A constant that represents a shape with a 5D first-major data layout.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0034:0001"><a href="bnns/shape/tensor5dlastmajor(_:_:_:_:_:stride:">case tensor5DLastMajor(Int, Int, Int, Int, Int, stride: (Int, Int, Int, Int, Int))</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0035:0001">A constant that represents a shape with a 5D last-major data layout.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0036:0001"><a href="bnns/shape/tensor6dfirstmajor(_:_:_:_:_:_:stride:">case tensor6DFirstMajor(Int, Int, Int, Int, Int, Int, stride: (Int, Int, Int, Int, Int, Int))</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0037:0001">A constant that represents a shape with a 6D first-major data layout.</span>

---

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0039:0001">*<a href="https://developer.apple.com/documentation/accelerate/bnns/shape/matrixfirstmajor(_:_:stride:">View on Apple Developer</a>)*</span>

---
source_path: "documentation/ARKit/cameraframe/sample.md"
upstream_sha: "8a29a1d75e67151b588206d3e921a4ff212726be"
translation_status: machine_translated
official_url: "https://developer.apple.com/documentation/arkit/cameraframe/sample"
official: false
---

> 비공식 번역입니다. 정확한 최신 내용은 원문을 확인하세요.

# <span class="ko-segment" data-segment-id="seg:heading:cameraframesample:0000:0001">CameraFrame.Sample</span>

<span class="ko-segment" data-segment-id="seg:paragraph:cameraframesample:0001:0001">**Framework**: ARKit **Kind**: struct</span>

<span class="ko-segment" data-segment-id="seg:paragraph:cameraframesample:0002:0001">카메라 프레임 샘플에 대한 정보를 설명합니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:cameraframesample:0003:0001">**Availability**:</span>

- <span class="ko-segment" data-segment-id="seg:list:cameraframesample:0004:0001">visionOS 2.0+</span>

## <span class="ko-segment" data-segment-id="seg:heading:declaration:0005:0001">Declaration</span>

```swift
struct Sample
```

#### <span class="ko-segment" data-segment-id="seg:heading:overview:0007:0001">Overview</span>

<span class="ko-segment" data-segment-id="seg:paragraph:overview:0008:0001">이 구조체를 사용해 <a href="cameraframe.md">@@TOKEN_0@@</a>에서 샘플에 대한 정보(프레임 설정 및 매개변수, 샘플 데이터가 들어 있는 픽셀 버퍼 등)에 접근할 수 있습니다.</span>

## <span class="ko-segment" data-segment-id="seg:heading:topics:0009:0001">Topics</span>

### <span class="ko-segment" data-segment-id="seg:heading:inspecting-camera-frame-samples:0010:0001">카메라 프레임 샘플 검사</span>

- <span class="ko-segment" data-segment-id="seg:list:inspecting-camera-frame-samples:0011:0001"><a href="cameraframe/sample/parameters-swift.property.md">var parameters: CameraFrame.Sample.Parameters</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:inspecting-camera-frame-samples:0012:0001">프레임의 매개변수입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:inspecting-camera-frame-samples:0013:0001"><a href="cameraframe/sample/parameters-swift.struct.md">CameraFrame.Sample.Parameters</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:inspecting-camera-frame-samples:0014:0001">카메라 유형, 내부 파라미터, 타임스탬프, 노출 등과 같은 프레임의 매개변수입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:inspecting-camera-frame-samples:0015:0001"><a href="cameraframe/sample/pixelbuffer.md">var pixelBuffer: CVPixelBuffer</a></span>

### <span class="ko-segment" data-segment-id="seg:heading:instance-properties:0016:0001">인스턴스 속성</span>

- <span class="ko-segment" data-segment-id="seg:list:instance-properties:0017:0001"><a href="cameraframe/sample/buffer.md">var buffer: CVReadOnlyPixelBuffer</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:instance-properties:0018:0001">픽셀 버퍼입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:instance-properties:0019:0001"><a href="cameraframe/sample/description.md">var description: String</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:instance-properties:0020:0001">이 카메라 프레임 샘플의 텍스트 표현입니다.</span>

## <span class="ko-segment" data-segment-id="seg:heading:relationships:0021:0001">Relationships</span>

### <span class="ko-segment" data-segment-id="seg:heading:conforms-to:0022:0001">준수 대상</span>

- <span class="ko-segment" data-segment-id="seg:list:conforms-to:0023:0001"><a href="../Swift/CustomStringConvertible.md">CustomStringConvertible</a></span>
- <span class="ko-segment" data-segment-id="seg:list:conforms-to:0023:0002"><a href="../Swift/Equatable.md">Equatable</a></span>
- <span class="ko-segment" data-segment-id="seg:list:conforms-to:0023:0003"><a href="../Swift/Sendable.md">Sendable</a></span>
- <span class="ko-segment" data-segment-id="seg:list:conforms-to:0023:0004"><a href="../Swift/SendableMetatype.md">SendableMetatype</a></span>

## <span class="ko-segment" data-segment-id="seg:heading:see-also:0024:0001">참고 항목</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0025:0001"><a href="cameraframe/primarysample.md">var primarySample: CameraFrame.Sample</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0026:0001">카메라 프레임의 기본 프레임 샘플을 가져옵니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0027:0001"><a href="cameraframe/sample(for:">func sample(for: CameraFrameProvider.CameraPosition) -&gt; CameraFrame.Sample?</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0028:0001">주어진 카메라 위치에 대한 카메라 프레임 샘플을 반환합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0029:0001"><a href="cameraframe/description.md">var description: String</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0030:0001">이 카메라 프레임의 텍스트 표현입니다.</span>

---

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0032:0001">*<a href="https://developer.apple.com/documentation/arkit/cameraframe/sample">View on Apple Developer</a>*</span>

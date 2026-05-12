---
source_path: "documentation/AVFoundation/avcaptureoutput/outputrectconverted-frommetadataoutputrect.md"
upstream_sha: "8a29a1d75e67151b588206d3e921a4ff212726be"
translation_status: machine_translated
official_url: "https://developer.apple.com/documentation/avfoundation/avcaptureoutput/outputrectconverted-frommetadataoutputrect"
official: false
---

> 비공식 번역입니다. 정확한 최신 내용은 원문을 확인하세요.

# <span class="ko-segment" data-segment-id="seg:heading:outputrectconvertedfrommetadataoutputrect:0000:0001">outputRectConverted(fromMetadataOutputRect:)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:outputrectconvertedfrommetadataoutputrect:0001:0001">**Framework**: AVFoundation **Kind**: method</span>

<span class="ko-segment" data-segment-id="seg:paragraph:outputrectconvertedfrommetadataoutputrect:0002:0001">메타데이터 출력에 사용되는 좌표계의 직사각형을 캡처 출력 객체의 좌표계로 변환합니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:outputrectconvertedfrommetadataoutputrect:0003:0001">**Availability**:</span>

- <span class="ko-segment" data-segment-id="seg:list:outputrectconvertedfrommetadataoutputrect:0004:0001">iOS 7.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:outputrectconvertedfrommetadataoutputrect:0004:0002">iPadOS 7.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:outputrectconvertedfrommetadataoutputrect:0004:0003">Mac Catalyst 14.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:outputrectconvertedfrommetadataoutputrect:0004:0004">macOS 10.15+</span>
- <span class="ko-segment" data-segment-id="seg:list:outputrectconvertedfrommetadataoutputrect:0004:0005">tvOS 17.0+</span>

## <span class="ko-segment" data-segment-id="seg:heading:declaration:0005:0001">Declaration</span>

```swift
func outputRectConverted(fromMetadataOutputRect rectInMetadataOutputCoordinates: CGRect) -> CGRect
```

#### <span class="ko-segment" data-segment-id="seg:heading:return-value:0007:0001">반환 값</span>

<span class="ko-segment" data-segment-id="seg:paragraph:return-value:0008:0001"><a href="avcaptureoutput.md">@@TOKEN_0@@</a> 객체 좌표계의 직사각형입니다.</span>

#### <span class="ko-segment" data-segment-id="seg:heading:discussion:0009:0001">Discussion</span>

<span class="ko-segment" data-segment-id="seg:paragraph:discussion:0010:0001"><a href="avcapturemetadataoutput.md">@@TOKEN_0@@</a> 객체의 관심 직사각형은 장치의 기본 방향을 기준으로 좌측 상단이 <code>{0,0}</code>이고 우측 하단이 <code>{1,1}</code>인 좌표계에 있습니다.</span> <span class="ko-segment" data-segment-id="seg:paragraph:discussion:0010:0002">캡처 출력 객체는 확대, 회전 또는 미러링할 수 있는 픽셀 좌표 공간을 사용합니다.</span>

## <span class="ko-segment" data-segment-id="seg:heading:parameters:0011:0001">Parameters</span>

- <span class="ko-segment" data-segment-id="seg:list:parameters:0012:0001"><code>rectInMetadataOutputCoordinates</code>: <a href="avcapturemetadataoutput.md">@@TOKEN_1@@</a> 좌표계의 직사각형입니다.</span>

## <span class="ko-segment" data-segment-id="seg:heading:see-also:0013:0001">참고 항목</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0014:0001"><a href="avcaptureoutput/transformedmetadataobject(for:connection:">func transformedMetadataObject(for: AVMetadataObject, connection: AVCaptureConnection) -&gt; AVMetadataObject?</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0015:0001">메타데이터 객체의 시각적 속성을 레이어 좌표로 변환합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0016:0001"><a href="avcaptureoutput/metadataoutputrectconverted(fromoutputrect:">func metadataOutputRectConverted(fromOutputRect: CGRect) -&gt; CGRect</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0017:0001">캡처 출력 객체의 좌표계에서 직사각형을 메타데이터 출력에 사용되는 좌표계로 변환합니다.</span>

---

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0019:0001">*<a href="https://developer.apple.com/documentation/avfoundation/avcaptureoutput/outputrectconverted(frommetadataoutputrect:">View on Apple Developer</a>)*</span>

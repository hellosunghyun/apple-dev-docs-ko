---
source_path: "documentation/AVFoundation/avcapturevideopreviewlayer/layerpointconverted-fromcapturedevicepoint.md"
upstream_sha: "8a29a1d75e67151b588206d3e921a4ff212726be"
translation_status: machine_translated
official_url: "https://developer.apple.com/documentation/avfoundation/avcapturevideopreviewlayer/layerpointconverted-fromcapturedevicepoint"
official: false
---

> 비공식 번역입니다. 정확한 최신 내용은 원문을 확인하세요.

# <span class="ko-segment" data-segment-id="seg:heading:layerpointconvertedfromcapturedevicepoint:0000:0001">layerPointConverted(fromCaptureDevicePoint:)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:layerpointconvertedfromcapturedevicepoint:0001:0001">**Framework**: AVFoundation **Kind**: method</span>

<span class="ko-segment" data-segment-id="seg:paragraph:layerpointconvertedfromcapturedevicepoint:0002:0001">캡처 장치의 좌표 공간에서 레이어 좌표 공간으로 점을 변환합니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:layerpointconvertedfromcapturedevicepoint:0003:0001">**Availability**:</span>

- <span class="ko-segment" data-segment-id="seg:list:layerpointconvertedfromcapturedevicepoint:0004:0001">iOS 6.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:layerpointconvertedfromcapturedevicepoint:0004:0002">iPadOS 6.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:layerpointconvertedfromcapturedevicepoint:0004:0003">Mac Catalyst 14.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:layerpointconvertedfromcapturedevicepoint:0004:0004">macOS 10.15+</span>
- <span class="ko-segment" data-segment-id="seg:list:layerpointconvertedfromcapturedevicepoint:0004:0005">tvOS 17.0+</span>

## <span class="ko-segment" data-segment-id="seg:heading:declaration:0005:0001">Declaration</span>

```swift
func layerPointConverted(fromCaptureDevicePoint captureDevicePointOfInterest: CGPoint) -> CGPoint
```

#### <span class="ko-segment" data-segment-id="seg:heading:return-value:0007:0001">반환 값</span>

<span class="ko-segment" data-segment-id="seg:paragraph:return-value:0008:0001">레이어 좌표의 점입니다.</span>

#### <span class="ko-segment" data-segment-id="seg:heading:discussion:0009:0001">Discussion</span>

<span class="ko-segment" data-segment-id="seg:paragraph:discussion:0010:0001">캡처 장치의 <a href="avcapturedevice/focuspointofinterest.md">@@TOKEN_0@@</a> 및 <a href="avcapturedevice/exposurepointofinterest.md">@@TOKEN_1@@</a> 속성은 회전되지 않은 이미지에서 <code>{0,0}</code>이 좌상단, <code>{1,1}</code>이 우하단을 나타내는 <a href="https://developer.apple.com/documentation/CoreFoundation/CGPoint">@@TOKEN_4@@</a> 값을 제공합니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:discussion:0011:0001">시스템은 변환 시 layer의 프레임 크기와 해당 <a href="avcapturevideopreviewlayer/videogravity.md">@@TOKEN_0@@</a>를 고려합니다.</span>

## <span class="ko-segment" data-segment-id="seg:heading:parameters:0012:0001">Parameters</span>

- <span class="ko-segment" data-segment-id="seg:list:parameters:0013:0001"><code>captureDevicePointOfInterest</code>: 변환할 캡처 장치 좌표의 점입니다.</span>

## <span class="ko-segment" data-segment-id="seg:heading:see-also:0014:0001">참고 항목</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0015:0001"><a href="avcapturevideopreviewlayer/capturedevicepointconverted(fromlayerpoint:">func captureDevicePointConverted(fromLayerPoint: CGPoint) -&gt; CGPoint</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0016:0001">레이어 좌표의 점을 캡처 장치의 좌표 공간으로 변환합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0017:0001"><a href="avcapturevideopreviewlayer/layerrectconverted(frommetadataoutputrect:">func layerRectConverted(fromMetadataOutputRect: CGRect) -&gt; CGRect</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0018:0001">메타데이터 출력 좌표에서 레이어의 좌표 공간으로 사각형을 변환합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0019:0001"><a href="avcapturevideopreviewlayer/metadataoutputrectconverted(fromlayerrect:">func metadataOutputRectConverted(fromLayerRect: CGRect) -&gt; CGRect</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0020:0001">레이어 좌표의 사각형을 메타데이터 출력의 좌표 공간으로 변환합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0021:0001"><a href="avcapturevideopreviewlayer/transformedmetadataobject(for:">func transformedMetadataObject(for: AVMetadataObject) -&gt; AVMetadataObject?</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0022:0001">메타데이터 객체의 시각적 속성을 레이어 좌표로 변환합니다.</span>

---

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0024:0001">*<a href="https://developer.apple.com/documentation/avfoundation/avcapturevideopreviewlayer/layerpointconverted(fromcapturedevicepoint:">View on Apple Developer</a>)*</span>

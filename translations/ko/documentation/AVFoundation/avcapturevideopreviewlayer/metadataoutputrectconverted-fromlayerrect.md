---
source_path: "documentation/AVFoundation/avcapturevideopreviewlayer/metadataoutputrectconverted-fromlayerrect.md"
upstream_sha: "8a29a1d75e67151b588206d3e921a4ff212726be"
translation_status: machine_translated
official_url: "https://developer.apple.com/documentation/avfoundation/avcapturevideopreviewlayer/metadataoutputrectconverted-fromlayerrect"
official: false
---

> 비공식 번역입니다. 정확한 최신 내용은 원문을 확인하세요.

# <span class="ko-segment" data-segment-id="seg:heading:metadataoutputrectconvertedfromlayerrect:0000:0001">metadataOutputRectConverted(fromLayerRect:)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:metadataoutputrectconvertedfromlayerrect:0001:0001">**Framework**: AVFoundation **Kind**: method</span>

<span class="ko-segment" data-segment-id="seg:paragraph:metadataoutputrectconvertedfromlayerrect:0002:0001">사각형을 레이어 좌표에서 메타데이터 출력의 좌표 공간으로 변환합니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:metadataoutputrectconvertedfromlayerrect:0003:0001">**Availability**:</span>

- <span class="ko-segment" data-segment-id="seg:list:metadataoutputrectconvertedfromlayerrect:0004:0001">iOS 7.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:metadataoutputrectconvertedfromlayerrect:0004:0002">iPadOS 7.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:metadataoutputrectconvertedfromlayerrect:0004:0003">Mac Catalyst 14.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:metadataoutputrectconvertedfromlayerrect:0004:0004">macOS 10.15+</span>
- <span class="ko-segment" data-segment-id="seg:list:metadataoutputrectconvertedfromlayerrect:0004:0005">tvOS 17.0+</span>

## <span class="ko-segment" data-segment-id="seg:heading:declaration:0005:0001">Declaration</span>

```swift
func metadataOutputRectConverted(fromLayerRect rectInLayerCoordinates: CGRect) -> CGRect
```

#### <span class="ko-segment" data-segment-id="seg:heading:return-value:0007:0001">반환 값</span>

<span class="ko-segment" data-segment-id="seg:paragraph:return-value:0008:0001">메타데이터 출력의 좌표계에 있는 사각형입니다.</span>

#### <span class="ko-segment" data-segment-id="seg:heading:discussion:0009:0001">Discussion</span>

<span class="ko-segment" data-segment-id="seg:paragraph:discussion:0010:0001">메타데이터 캡처 출력의 <a href="avcapturemetadataoutput/rectofinterest.md">@@TOKEN_0@@</a> 값은 <a href="https://developer.apple.com/documentation/CoreFoundation/CGRect">@@TOKEN_1@@</a>로, <code>{0,0}</code>은 회전되지 않은 이미지 영역의 왼쪽 위를, <code>{1,1}</code>은 오른쪽 아래를 나타냅니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:discussion:0011:0001">시스템은 레이어의 프레임 크기와 해당 <a href="avcapturevideopreviewlayer/videogravity.md">@@TOKEN_0@@</a>를 변환 시 고려합니다.</span>

## <span class="ko-segment" data-segment-id="seg:heading:parameters:0012:0001">Parameters</span>

- <span class="ko-segment" data-segment-id="seg:list:parameters:0013:0001"><code>rectInLayerCoordinates</code>: <a href="avcapturevideopreviewlayer.md">@@TOKEN_1@@</a> 객체 좌표계의 사각형입니다.</span>

## <span class="ko-segment" data-segment-id="seg:heading:see-also:0014:0001">참고 항목</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0015:0001"><a href="avcapturevideopreviewlayer/layerpointconverted(fromcapturedevicepoint:">func layerPointConverted(fromCaptureDevicePoint: CGPoint) -&gt; CGPoint</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0016:0001">캡처 장치의 좌표 공간에서 레이어의 좌표 공간으로 점을 변환합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0017:0001"><a href="avcapturevideopreviewlayer/capturedevicepointconverted(fromlayerpoint:">func captureDevicePointConverted(fromLayerPoint: CGPoint) -&gt; CGPoint</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0018:0001">레이어 좌표에서 캡처 장치의 좌표 공간으로 점을 변환합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0019:0001"><a href="avcapturevideopreviewlayer/layerrectconverted(frommetadataoutputrect:">func layerRectConverted(fromMetadataOutputRect: CGRect) -&gt; CGRect</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0020:0001">메타데이터 출력 좌표에서 레이어의 좌표 공간으로 사각형을 변환합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0021:0001"><a href="avcapturevideopreviewlayer/transformedmetadataobject(for:">func transformedMetadataObject(for: AVMetadataObject) -&gt; AVMetadataObject?</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0022:0001">메타데이터 객체의 시각적 속성을 레이어 좌표로 변환합니다.</span>

---

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0024:0001">*<a href="https://developer.apple.com/documentation/avfoundation/avcapturevideopreviewlayer/metadataoutputrectconverted(fromlayerrect:">View on Apple Developer</a>)*</span>

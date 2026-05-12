---
source_path: "documentation/ARKit/arerror/code/invalidcollaborationdata.md"
upstream_sha: "8a29a1d75e67151b588206d3e921a4ff212726be"
translation_status: machine_translated
official_url: "https://developer.apple.com/documentation/arkit/arerror/code/invalidcollaborationdata"
official: false
---

> 비공식 번역입니다. 정확한 최신 내용은 원문을 확인하세요.

# <span class="ko-segment" data-segment-id="seg:heading:arerrorcodeinvalidcollaborationdata:0000:0001">ARError.Code.invalidCollaborationData</span>

<span class="ko-segment" data-segment-id="seg:paragraph:arerrorcodeinvalidcollaborationdata:0001:0001">**Framework**: ARKit **Kind**: case</span>

<span class="ko-segment" data-segment-id="seg:paragraph:arerrorcodeinvalidcollaborationdata:0002:0001">앱이 네트워크를 통해 수신한 협업 데이터를 프레임워크가 파싱하지 못했음을 나타내는 오류입니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:arerrorcodeinvalidcollaborationdata:0003:0001">**Availability**:</span>

- <span class="ko-segment" data-segment-id="seg:list:arerrorcodeinvalidcollaborationdata:0004:0001">iOS 13.2+</span>
- <span class="ko-segment" data-segment-id="seg:list:arerrorcodeinvalidcollaborationdata:0004:0002">iPadOS 13.2+</span>
- <span class="ko-segment" data-segment-id="seg:list:arerrorcodeinvalidcollaborationdata:0004:0003">Mac Catalyst 13.2+</span>

## <span class="ko-segment" data-segment-id="seg:heading:declaration:0005:0001">Declaration</span>

```swift
case invalidCollaborationData
```

#### <span class="ko-segment" data-segment-id="seg:heading:discussion:0007:0001">Discussion</span>

<span class="ko-segment" data-segment-id="seg:paragraph:discussion:0008:0001">If this property is <code>true</code>, but no assistive technology, such as VoiceOver, is on, the speech synthesizer uses the utterance property values.</span>

## <span class="ko-segment" data-segment-id="seg:heading:see-also:0009:0001">참고 항목</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0010:0001"><a href="arerror/code/requestfailed.md">ARError.Code.requestFailed</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0011:0001">요청이 실패했음을 나타내는 오류입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0012:0001"><a href="arerror/code/cameraunauthorized.md">ARError.Code.cameraUnauthorized</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0013:0001">앱이 카메라에 대한 사용자 권한이 없음을 나타내는 오류입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0014:0001"><a href="arerror/code/fileiofailed.md">ARError.Code.fileIOFailed</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0015:0001">파일 접근이 읽기 또는 쓰기에 실패했음을 나타내는 오류입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0016:0001"><a href="arerror/code/insufficientfeatures.md">ARError.Code.insufficientFeatures</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0017:0001">작업을 완료하려면 더 많은 기능이 필요함을 나타내는 오류입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0018:0001"><a href="arerror/code/invalidconfiguration.md">ARError.Code.invalidConfiguration</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0019:0001">구성에 모호하거나 잘못된 데이터가 포함되어 있음을 나타내는 오류입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0020:0001"><a href="arerror/code/invalidreferenceimage.md">ARError.Code.invalidReferenceImage</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0021:0001">프레임워크가 기준 이미지를 처리하지 못했음을 나타내는 오류입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0022:0001"><a href="arerror/code/invalidreferenceobject.md">ARError.Code.invalidReferenceObject</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0023:0001">프레임워크가 기준 객체를 처리하지 못했음을 나타내는 오류입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0024:0001"><a href="arerror/code/invalidworldmap.md">ARError.Code.invalidWorldMap</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0025:0001">프레임워크가 월드맵을 처리하지 못했음을 나타내는 오류입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0026:0001"><a href="arerror/code/microphoneunauthorized.md">ARError.Code.microphoneUnauthorized</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0027:0001">앱이 마이크에 대한 사용자 권한이 없음을 나타내는 오류입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0028:0001"><a href="arerror/code/objectmergefailed.md">ARError.Code.objectMergeFailed</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0029:0001">프레임워크가 감지된 객체를 병합하지 못했음을 나타내는 오류입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0030:0001"><a href="arerror/code/sensorfailed.md">ARError.Code.sensorFailed</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0031:0001">센서가 필요한 입력을 제공하지 못했음을 나타내는 오류입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0032:0001"><a href="arerror/code/sensorunavailable.md">ARError.Code.sensorUnavailable</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0033:0001">프레임워크가 필요한 센서에 접근하지 못했음을 나타내는 오류입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0034:0001"><a href="arerror/code/unsupportedconfiguration.md">ARError.Code.unsupportedConfiguration</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0035:0001">기기가 세션 구성을 지원하지 않음을 나타내는 오류입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0036:0001"><a href="arerror/code/worldtrackingfailed.md">ARError.Code.worldTrackingFailed</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0037:0001">월드 추적에서 복구할 수 없는 문제가 발생했을 때 나타나는 오류입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0038:0001"><a href="arerror/code/geotrackingfailed.md">ARError.Code.geoTrackingFailed</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0039:0001">로컬라이제이션 이미지가 기기의 카메라 캡처와 일치하지 않을 때 나타나는 오류입니다.</span>

---

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0041:0001">*<a href="https://developer.apple.com/documentation/arkit/arerror/code/invalidcollaborationdata">View on Apple Developer</a>*</span>

---
source_path: "documentation/ARKit/arerror/highresolutionframecapturefailed.md"
upstream_sha: "8a29a1d75e67151b588206d3e921a4ff212726be"
translation_status: machine_translated
official_url: "https://developer.apple.com/documentation/arkit/arerror/highresolutionframecapturefailed"
official: false
---

> 비공식 번역입니다. 정확한 최신 내용은 원문을 확인하세요.

# <span class="ko-segment" data-segment-id="seg:heading:highresolutionframecapturefailed:0000:0001">highResolutionFrameCaptureFailed</span>

<span class="ko-segment" data-segment-id="seg:paragraph:highresolutionframecapturefailed:0001:0001">**Framework**: ARKit **Kind**: property</span>

<span class="ko-segment" data-segment-id="seg:paragraph:highresolutionframecapturefailed:0002:0001">시스템의 캡처 파이프라인 문제를 나타내는 오류입니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:highresolutionframecapturefailed:0003:0001">**Availability**:</span>

- <span class="ko-segment" data-segment-id="seg:list:highresolutionframecapturefailed:0004:0001">iOS 16.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:highresolutionframecapturefailed:0004:0002">iPadOS 16.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:highresolutionframecapturefailed:0004:0003">Mac Catalyst 16.0+</span>

## <span class="ko-segment" data-segment-id="seg:heading:declaration:0005:0001">Declaration</span>

```swift
static var highResolutionFrameCaptureFailed: ARError.Code { get }
```

#### <span class="ko-segment" data-segment-id="seg:heading:discussion:0007:0001">Discussion</span>

<span class="ko-segment" data-segment-id="seg:paragraph:discussion:0008:0001">시스템은 실패한 작업에 대해 <a href="arsession/capturehighresolutionframe(completion:">@@TOKEN_0@@</a>.md)의 completion handler에 이 오류를 전달합니다.</span>

## <span class="ko-segment" data-segment-id="seg:heading:see-also:0009:0001">참조 항목</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0010:0001"><a href="arerror/code.md">ARError.Code</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0011:0001">ARKit의 오류를 식별하는 코드입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0012:0001"><a href="arerror/requestfailed.md">static var requestFailed: ARError.Code</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0013:0001">요청 실패를 나타내는 오류입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0014:0001"><a href="arerror/cameraunauthorized.md">static var cameraUnauthorized: ARError.Code</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0015:0001">앱이 카메라 사용자 권한이 없는 경우를 나타내는 오류입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0016:0001"><a href="arerror/fileiofailed.md">static var fileIOFailed: ARError.Code</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0017:0001">파일 액세스가 읽기 또는 쓰기 작업에 실패했음을 나타내는 오류입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0018:0001"><a href="arerror/insufficientfeatures.md">static var insufficientFeatures: ARError.Code</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0019:0001">작업을 완료하려면 프레임워크에서 더 많은 기능이 필요한 상태를 나타내는 오류입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0020:0001"><a href="arerror/invalidcollaborationdata.md">static var invalidCollaborationData: ARError.Code</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0021:0001">앱이 네트워크를 통해 수신한 협업 데이터를 프레임워크가 파싱하지 못했음을 나타내는 오류입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0022:0001"><a href="arerror/invalidconfiguration.md">static var invalidConfiguration: ARError.Code</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0023:0001">구성에 모호하거나 잘못된 데이터가 포함되었음을 나타내는 오류입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0024:0001"><a href="arerror/invalidreferenceimage.md">static var invalidReferenceImage: ARError.Code</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0025:0001">프레임워크가 참조 이미지를 처리하지 못했음을 나타내는 오류입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0026:0001"><a href="arerror/invalidreferenceobject.md">static var invalidReferenceObject: ARError.Code</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0027:0001">프레임워크가 참조 객체를 처리하지 못했음을 나타내는 오류입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0028:0001"><a href="arerror/invalidworldmap.md">static var invalidWorldMap: ARError.Code</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0029:0001">프레임워크가 월드 맵을 처리하지 못했음을 나타내는 오류입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0030:0001"><a href="arerror/microphoneunauthorized.md">static var microphoneUnauthorized: ARError.Code</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0031:0001">앱이 마이크 사용자 권한이 없는 경우를 나타내는 오류입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0032:0001"><a href="arerror/objectmergefailed.md">static var objectMergeFailed: ARError.Code</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0033:0001">프레임워크가 감지된 객체를 병합하지 못했음을 나타내는 오류입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0034:0001"><a href="arerror/sensorfailed.md">static var sensorFailed: ARError.Code</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0035:0001">필수 입력을 제공하지 못한 센서 오류를 나타내는 오류입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0036:0001"><a href="arerror/sensorunavailable.md">static var sensorUnavailable: ARError.Code</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0037:0001">프레임워크가 필요한 센서에 액세스하지 못했음을 나타내는 오류입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0038:0001"><a href="arerror/unsupportedconfiguration.md">static var unsupportedConfiguration: ARError.Code</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0039:0001">기기가 세션 구성에 대한 지원이 부족함을 나타내는 오류입니다.</span>

---

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0041:0001">*<a href="https://developer.apple.com/documentation/arkit/arerror/highresolutionframecapturefailed">View on Apple Developer</a>*</span>

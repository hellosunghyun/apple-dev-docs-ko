---
source_path: "documentation/ARKit/verifying-device-support-and-user-permission.md"
upstream_sha: "8a29a1d75e67151b588206d3e921a4ff212726be"
translation_status: machine_translated
official_url: "https://developer.apple.com/documentation/arkit/verifying-device-support-and-user-permission"
official: false
---

> 비공식 번역입니다. 정확한 최신 내용은 원문을 확인하세요.

# <span class="ko-segment" data-segment-id="seg:heading:verifying-device-support-and-user-permission:0000:0001">장치 지원 및 사용자 권한 확인</span>

<span class="ko-segment" data-segment-id="seg:paragraph:verifying-device-support-and-user-permission:0001:0001">**프레임워크**: ARKit</span>

<span class="ko-segment" data-segment-id="seg:paragraph:verifying-device-support-and-user-permission:0002:0001">앱이 런타임에서 ARKit을 사용할 수 있는지와 사용자 개인정보 보호를 준수할 수 있는지를 확인합니다.</span>

#### <span class="ko-segment" data-segment-id="seg:heading:overview:0003:0001">Overview</span>

<span class="ko-segment" data-segment-id="seg:paragraph:overview:0004:0001">ARKit은 iOS 11.0 이상과 A9 이상 프로세서를 탑재한 iOS 기기를 요구합니다.</span> <span class="ko-segment" data-segment-id="seg:paragraph:overview:0004:0002">일부 ARKit 기능은 더 높은 iOS 버전 또는 특정 기기를 요구합니다.</span> <span class="ko-segment" data-segment-id="seg:paragraph:overview:0004:0003">ARKit은 기기 카메라도 사용하므로 앱에서 사용자가 카메라 접근을 허용할 수 있도록 iOS 개인정보 보호 설정을 구성해야 합니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:overview:0005:0001">ARKit를 앱에서 사용하는 방식에 따라 기기 호환성 지원 처리 방법이 달라집니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:overview:0006:0001">**앱의 기본 기능이 AR(후면 카메라 사용)를 필요로 하는 경우:** 앱의 <code>Info.plist</code> 파일에서 <a href="https://developer.apple.comhttps://developer.apple.com/library/archive/documentation/General/Reference/InfoPlistKeyReference/Articles/iPhoneOSKeys.html#//apple_ref/doc/uid/TP40009252-SW3">@@TOKEN_1@@</a> 섹션에 <code>arkit</code> 키를 추가합니다. 이 키를 사용하면 앱이 ARKit와 호환되는 기기에서만 사용할 수 있습니다.</span>
- <span class="ko-segment" data-segment-id="seg:list:overview:0006:0002">**앱에서 증강 현실이 보조 기능인 경우:** 사용하려는 AR 구성에 대한 현재 기기 지원 여부를 적절한 <a href="arconfiguration.md">@@TOKEN_0@@</a> 하위 클래스의 <a href="arconfiguration/issupported.md">@@TOKEN_1@@</a> 속성을 테스트하여 확인합니다.</span>
- <span class="ko-segment" data-segment-id="seg:list:overview:0006:0003">**앱이 face-tracking AR을 사용하는 경우:** 얼굴 추적은 iPhone X의 전면 TrueDepth 카메라가 필요합니다. 앱은 다른 기기에서도 사용 가능하므로 현재 기기에서 얼굴 추적 지원 여부를 확인하려면 <a href="arfacetrackingconfiguration.md">@@TOKEN_0@@</a>.<a href="arconfiguration/issupported.md">@@TOKEN_1@@</a> 속성을 테스트해야 합니다.</span>

> <span class="ko-segment" data-segment-id="seg:blockquote:overview:0007:0001">💡 **팁**: 앱 UI에서 AR 기능을 제공하기 전에 <a href="arconfiguration/issupported.md">@@TOKEN_0@@</a> 속성을 확인하여, 지원되지 않는 기기의 사용자가 해당 기능에 접근하다가 실망하지 않도록 합니다.</span>

##### <span class="ko-segment" data-segment-id="seg:heading:handle-user-consent-and-privacy:0008:0001">사용자 동의 및 개인정보 보호 처리</span>

<span class="ko-segment" data-segment-id="seg:paragraph:handle-user-consent-and-privacy:0009:0001">앱이 ARKit를 사용하려면 사용자가 앱에 카메라 접근 권한을 명시적으로 부여해야 합니다.</span> <span class="ko-segment" data-segment-id="seg:paragraph:handle-user-consent-and-privacy:0009:0002">ARKit는 앱이 AR 세션을 처음 실행할 때 사용자에게 자동으로 권한을 요청합니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:handle-user-consent-and-privacy:0010:0001">iOS는 시스템이 카메라 또는 마이크 권한을 요청할 때 표시할 정적 메시지를 앱에서 제공하도록 요구합니다.</span> <span class="ko-segment" data-segment-id="seg:paragraph:handle-user-consent-and-privacy:0010:0002">앱의 <code>Info.plist</code> 파일에는 <a href="https://developer.apple.comhttps://developer.apple.com/library/archive/documentation/General/Reference/InfoPlistKeyReference/Articles/CocoaKeys.html#//apple_ref/doc/plist/info/NSCameraUsageDescription">@@TOKEN_1@@</a> 키가 포함되어야 합니다.</span> <span class="ko-segment" data-segment-id="seg:paragraph:handle-user-consent-and-privacy:0010:0003">해당 키에는 앱이 카메라 접근이 필요한 이유를 설명하여 사용자가 앱에 대한 권한을 신뢰하고 허용할 수 있도록 하는 텍스트를 제공합니다.</span>

> <span class="ko-segment" data-segment-id="seg:blockquote:handle-user-consent-and-privacy:0011:0001">**참고**: Xcode 템플릿으로 새 ARKit 앱을 만들면 기본 카메라 사용 설명 메시지가 제공됩니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:handle-user-consent-and-privacy:0012:0001">앱에서 <a href="arfacetrackingconfiguration.md">@@TOKEN_0@@</a>을(를) 사용하면 ARKit는 개인 얼굴 정보를 앱에 제공합니다.</span> <span class="ko-segment" data-segment-id="seg:paragraph:handle-user-consent-and-privacy:0012:0002">ARKit 얼굴 추적 기능을 사용하는 경우, 앱에는 얼굴 추적 및 얼굴 데이터를 사용하려는 방식에 대해 사용자에게 설명하는 개인정보 처리방침이 포함되어야 합니다.</span> <span class="ko-segment" data-segment-id="seg:paragraph:handle-user-consent-and-privacy:0012:0003">자세한 내용은 <a href="https://developer.apple.comhttps://developer.apple.com/terms/">@@TOKEN_0@@</a>를 참조하세요.</span>

## <span class="ko-segment" data-segment-id="seg:heading:see-also:0013:0001">참고 항목</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0014:0001"><a href="arsession.md">class ARSession</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0015:0001">움직임 추적, 카메라 패스스루, 이미지 분석과 같은 AR 경험과 관련된 주요 작업을 관리하는 개체입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0016:0001"><a href="aranchor.md">class ARAnchor</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0017:0001">물리적 환경에서 항목의 위치와 방향을 지정하는 개체입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0018:0001"><a href="avspeechsynthesisprovidervoice/supportedlanguages.md">ARKit in iOS</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0019:0001">앱이나 게임에서 iOS 기기 카메라와 모션 기능을 통합해 증강 현실 경험을 만듭니다.</span>

---

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0021:0001">*<a href="https://developer.apple.com/documentation/arkit/verifying-device-support-and-user-permission">View on Apple Developer</a>*</span>
